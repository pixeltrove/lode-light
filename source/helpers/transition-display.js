// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function setPhases(effect, timing) {
  const transition = `${effect}-${timing}`;
  const phases = {
    enter: `${transition}-enter`,
    enterFrom: `${transition}-enter-from`,
    enterTo: `${transition}-enter-to`,
    leave: `${transition}-leave`,
    leaveFrom: `${transition}-leave-from`,
    leaveTo: `${transition}-leave-to`,
  };

  return phases;
}

function setTraits(element, effect, phases) {
  const traits = {
    isEntering: element.classList.contains(phases.enter),
    isShown: element.classList.contains(CLASS_SHOWN),
    isWaitable: effect === "wait" ? true : false,
    isExpandable: effect === "expand" ? true : false,
  };

  return traits;
}

function enter(element, phases, traits) {
  const handleEnterEnd = () => {
    if (!traits.isExpandable) {
      element.classList.remove(phases.enterTo);
    } else {
      element.style.height = "auto";
    }
    element.classList.remove(phases.enter);

    element.removeEventListener("transitionend", handleEnterEnd);
  };

  element.classList.add(CLASS_SHOWN);
  element.classList.add(phases.enter);
  if (!traits.isExpandable) {
    element.classList.add(phases.enterFrom);
  } else {
    element.style.height = 0;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!traits.isExpandable) {
        element.classList.remove(phases.enterFrom);
        element.classList.add(phases.enterTo);
      } else {
        element.style.height = element.scrollHeight + "px";
      }

      element.addEventListener("transitionend", handleEnterEnd);
    });
  });
}

function enterCancel(element, phases) {
  const handleEnterCancelEnd = () => {
    element.classList.remove(phases.enterFrom);
    element.classList.remove(phases.enter);
    element.classList.remove(CLASS_SHOWN);

    element.removeEventListener("transitionend", handleEnterCancelEnd);
  };

  element.classList.remove(phases.enterTo);
  element.classList.add(phases.enterFrom);

  element.addEventListener("transitionend", handleEnterCancelEnd);
}

function leave(element, phases, traits) {
  const handleLeaveEnd = (event) => {
    if (event.target === event.currentTarget) {
      if (!traits.isExpandable) {
        element.classList.remove(phases.leaveTo);
      }
      element.classList.remove(phases.leave);
      element.classList.remove(CLASS_SHOWN);

      element.removeEventListener("transitionend", handleLeaveEnd);
    }
  };

  element.classList.add(phases.leave);
  if (!traits.isExpandable) {
    element.classList.add(phases.leaveFrom);
  } else {
    element.style.height = element.scrollHeight + "px";
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!traits.isExpandable) {
        element.classList.remove(phases.leaveFrom);
        element.classList.add(phases.leaveTo);
      } else {
        element.style.height = 0;
      }

      element.addEventListener("transitionend", handleLeaveEnd);
    });
  });
}

function wait(element, timing, traits) {
  const handleWaitEnd = () => {
    element.classList.remove(CLASS_SHOWN);

    timing.removeEventListener("transitionend", handleWaitEnd);
  };

  if (!traits.isShown) {
    element.classList.add(CLASS_SHOWN);
  } else {
    timing.addEventListener("transitionend", handleWaitEnd);
  }
}

function transitionDisplay(element, effect, timing = "regular") {
  const phases = setPhases(effect, timing);
  const traits = setTraits(element, effect, phases);

  if (!traits.isWaitable) {
    if (!traits.isShown) {
      enter(element, phases, traits);
    } else {
      if (!traits.isEntering) {
        leave(element, phases, traits);
      } else {
        enterCancel(element, phases);
      }
    }
  } else {
    wait(element, timing, traits);
  }
}

export default transitionDisplay;
