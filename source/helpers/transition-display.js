// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function setTransitionClasses(effect, timing) {
  const transitionName = `${effect}-${timing}`;
  const transitionClasses = {
    enter: `${transitionName}-enter`,
    enterFrom: `${transitionName}-enter-from`,
    enterTo: `${transitionName}-enter-to`,
    leave: `${transitionName}-leave`,
    leaveFrom: `${transitionName}-leave-from`,
    leaveTo: `${transitionName}-leave-to`,
  };

  return transitionClasses;
}

function setTransitionTraits(element, effect, transitionClasses) {
  const transitionTraits = {
    isEntering: element.classList.contains(transitionClasses.enter),
    isShown: element.classList.contains(CLASS_SHOWN),
    isWaitable: effect === "wait" ? true : false,
    isExpandable: effect === "expand" ? true : false,
  };

  return transitionTraits;
}

function enter(element, transitionClasses, transitionTraits) {
  const handleEnterEnd = () => {
    if (!transitionTraits.isExpandable) {
      element.classList.remove(transitionClasses.enterTo);
    }
    element.classList.remove(transitionClasses.enter);

    element.removeEventListener("transitionend", handleEnterEnd);
  };

  element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClasses.enter);
  if (!transitionTraits.isExpandable) {
    element.classList.add(transitionClasses.enterFrom);
  } else {
    element.style.overflowY = "hidden";
    element.style.height = 0;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!transitionTraits.isExpandable) {
        element.classList.remove(transitionClasses.enterFrom);
        element.classList.add(transitionClasses.enterTo);
      } else {
        element.style.height = element.scrollHeight + "px";
      }

      element.addEventListener("transitionend", handleEnterEnd);
    });
  });
}

function enterCancel(element, transitionClasses) {
  const handleEnterCancelEnd = () => {
    element.classList.remove(transitionClasses.enterFrom);
    element.classList.remove(transitionClasses.enter);
    element.classList.remove(CLASS_SHOWN);

    element.removeEventListener("transitionend", handleEnterCancelEnd);
  };

  element.classList.remove(transitionClasses.enterTo);
  element.classList.add(transitionClasses.enterFrom);

  element.addEventListener("transitionend", handleEnterCancelEnd);
}

function leave(element, transitionClasses, transitionTraits) {
  const handleLeaveEnd = (event) => {
    if (event.target === event.currentTarget) {
      if (!transitionTraits.isExpandable) {
        element.classList.remove(transitionClasses.leaveTo);
      }
      element.classList.remove(transitionClasses.leave);
      element.classList.remove(CLASS_SHOWN);

      element.removeEventListener("transitionend", handleLeaveEnd);
    }
  };

  element.classList.add(transitionClasses.leave);
  if (!transitionTraits.isExpandable) {
    element.classList.add(transitionClasses.leaveFrom);
  } else {
    element.style.overflowY = "hidden";
    element.style.height = element.scrollHeight + "px";
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!transitionTraits.isExpandable) {
        element.classList.remove(transitionClasses.leaveFrom);
        element.classList.add(transitionClasses.leaveTo);
      } else {
        element.style.height = 0;
      }

      element.addEventListener("transitionend", handleLeaveEnd);
    });
  });
}

function wait(element, timing, transitionTraits) {
  const handleWaitEnd = () => {
    element.classList.remove(CLASS_SHOWN);

    timing.removeEventListener("transitionend", handleWaitEnd);
  };

  if (!transitionTraits.isShown) {
    element.classList.add(CLASS_SHOWN);
  } else {
    timing.addEventListener("transitionend", handleWaitEnd);
  }
}

function transitionDisplay(element, effect, timing = "regular") {
  const transitionClasses = setTransitionClasses(effect, timing);
  const transitionTraits = setTransitionTraits(element, effect, transitionClasses);

  if (!transitionTraits.isWaitable) {
    if (!transitionTraits.isShown) {
      enter(element, transitionClasses, transitionTraits);
    } else {
      if (!transitionTraits.isEntering) {
        leave(element, transitionClasses, transitionTraits);
      } else {
        enterCancel(element, transitionClasses);
      }
    }
  } else {
    wait(element, timing, transitionTraits);
  }
}

export default transitionDisplay;
