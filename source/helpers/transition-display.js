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
    isConvertible: effect === "convert",
    isWaitable: effect === "wait",
  };

  return traits;
}

function enter(element, phases, traits) {
  const handleEnterEnd = () => {
    element.classList.remove(phases.enterTo);
    element.classList.remove(phases.enter);

    element.removeEventListener("transitionend", handleEnterEnd);
  };

  element.classList.add(CLASS_SHOWN);
  element.classList.add(phases.enter);
  element.classList.add(phases.enterFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (traits.isConvertible) {
        element.style.setProperty("--convert-height", element.scrollHeight + "px");
      }

      element.classList.remove(phases.enterFrom);
      element.classList.add(phases.enterTo);

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

function leave(element, phases) {
  const handleLeaveEnd = (event) => {
    if (event.target === event.currentTarget) {
      element.classList.remove(phases.leaveTo);
      element.classList.remove(phases.leave);
      element.classList.remove(CLASS_SHOWN);

      element.removeEventListener("transitionend", handleLeaveEnd);
    }
  };

  if (element.style.getPropertyValue("--convert-height") === "") {
    element.style.setProperty("--convert-height", element.scrollHeight + "px");
  }

  element.classList.add(phases.leave);
  element.classList.add(phases.leaveFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(phases.leaveFrom);
      element.classList.add(phases.leaveTo);

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
