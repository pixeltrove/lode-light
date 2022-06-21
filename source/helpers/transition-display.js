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
  };

  return transitionTraits;
}

function enter(element, transitionClasses) {
  function enterEnd() {
    element.classList.remove(transitionClasses.enterTo);
    element.classList.remove(transitionClasses.enter);

    element.removeEventListener("transitionend", enterEnd);
  }

  element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClasses.enter);
  element.classList.add(transitionClasses.enterFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.enterFrom);
      element.classList.add(transitionClasses.enterTo);

      element.addEventListener("transitionend", enterEnd);
    });
  });
}

function enterCancel(element, transitionClasses) {
  function enterCancelEnd() {
    element.classList.remove(transitionClasses.enterFrom);
    element.classList.remove(transitionClasses.enter);
    element.classList.remove(CLASS_SHOWN);

    element.removeEventListener("transitionend", enterCancelEnd);
  }

  element.classList.remove(transitionClasses.enterTo);
  element.classList.add(transitionClasses.enterFrom);

  element.addEventListener("transitionend", enterCancelEnd);
}

function leave(element, transitionClasses) {
  function leaveEnd(event) {
    if (event.target === event.currentTarget) {
      element.classList.remove(transitionClasses.leaveTo);
      element.classList.remove(transitionClasses.leave);
      element.classList.remove(CLASS_SHOWN);

      element.removeEventListener("transitionend", leaveEnd);
    }
  }

  element.classList.add(transitionClasses.leave);
  element.classList.add(transitionClasses.leaveFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.leaveFrom);
      element.classList.add(transitionClasses.leaveTo);

      element.addEventListener("transitionend", leaveEnd);
    });
  });
}

function wait(element, timing) {
  if (!element.classList.contains(CLASS_SHOWN)) {
    element.classList.add(CLASS_SHOWN);
  } else {
    function waitEnd() {
      element.classList.remove(CLASS_SHOWN);

      timing.removeEventListener("transitionend", waitEnd);
    }

    timing.addEventListener("transitionend", waitEnd);
  }
}

function transitionDisplay(element, effect, timing = "regular") {
  const transitionClasses = setTransitionClasses(effect, timing);
  const transitionTraits = setTransitionTraits(element, effect, transitionClasses);

  if (!transitionTraits.isShown && !transitionTraits.isWaitable) enter(element, transitionClasses);
  if (transitionTraits.isShown && !transitionTraits.isWaitable && transitionTraits.isEntering) enterCancel(element, transitionClasses);
  if (transitionTraits.isShown && !transitionTraits.isWaitable && !transitionTraits.isEntering) leave(element, transitionClasses);
  if (transitionTraits.isWaitable) wait(element, timing);
}

export default transitionDisplay;
