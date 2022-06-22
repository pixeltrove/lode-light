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
  const handleEnterEnd = () => {
    element.classList.remove(transitionClasses.enterTo);
    element.classList.remove(transitionClasses.enter);

    element.removeEventListener("transitionend", handleEnterEnd);
  };

  element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClasses.enter);
  element.classList.add(transitionClasses.enterFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.enterFrom);
      element.classList.add(transitionClasses.enterTo);

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

function leave(element, transitionClasses) {
  const handleLeaveEnd = (event) => {
    if (event.target === event.currentTarget) {
      element.classList.remove(transitionClasses.leaveTo);
      element.classList.remove(transitionClasses.leave);
      element.classList.remove(CLASS_SHOWN);

      element.removeEventListener("transitionend", handleLeaveEnd);
    }
  };

  element.classList.add(transitionClasses.leave);
  element.classList.add(transitionClasses.leaveFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.leaveFrom);
      element.classList.add(transitionClasses.leaveTo);

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

  if (!transitionTraits.isShown && !transitionTraits.isWaitable) enter(element, transitionClasses);
  if (transitionTraits.isShown && !transitionTraits.isWaitable && transitionTraits.isEntering) enterCancel(element, transitionClasses);
  if (transitionTraits.isShown && !transitionTraits.isWaitable && !transitionTraits.isEntering) leave(element, transitionClasses);
  if (transitionTraits.isWaitable) wait(element, timing, transitionTraits);
}

export default transitionDisplay;
