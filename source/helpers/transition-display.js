// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function generateTransitionClasses(effect, timing) {
  const transitionClasses = {
    enter: `${effect}-${timing}-enter`,
    enterFrom: `${effect}-${timing}-enter-from`,
    enterTo: `${effect}-${timing}-enter-to`,
    leave: `${effect}-${timing}-leave`,
    leaveFrom: `${effect}-${timing}-leave-from`,
    leaveTo: `${effect}-${timing}-leave-to`,
  };

  return transitionClasses;
}

function determineTransitionStages(element, effect, transitionClasses) {
  const transitionStages = {
    isEntering: element.classList.contains(transitionClasses.enter),
    isShowing: element.classList.contains(CLASS_SHOWN),
    isWaiting: effect === "wait" ? true : false,
  };

  return transitionStages;
}

function enter(element, transitionClasses) {
  element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClasses.enter);
  element.classList.add(transitionClasses.enterFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.enterFrom);
      element.classList.add(transitionClasses.enterTo);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(transitionClasses.enterTo);
          element.classList.remove(transitionClasses.enter);
        },
        { once: true }
      );
    });
  });
}

function cancelEnter(element, transitionClasses) {
  element.classList.remove(transitionClasses.enterTo);
  element.classList.add(transitionClasses.enterFrom);

  element.addEventListener(
    "transitionend",
    () => {
      element.classList.remove(transitionClasses.enterFrom);
      element.classList.remove(transitionClasses.enter);
      element.classList.remove(CLASS_SHOWN);
    },
    { once: true }
  );
}

function leave(element, transitionClasses) {
  element.classList.add(transitionClasses.leave);
  element.classList.add(transitionClasses.leaveFrom);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.leaveFrom);
      element.classList.add(transitionClasses.leaveTo);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(transitionClasses.leaveTo);
          element.classList.remove(transitionClasses.leave);
          element.classList.remove(CLASS_SHOWN);
        },
        { once: true }
      );
    });
  });
}

function wait(element) {
  if (!element.classList.contains(CLASS_SHOWN)) {
    element.classList.add(CLASS_SHOWN);
  } else {
    setTimeout(() => {
      element.classList.remove(CLASS_SHOWN);
    }, 280);
  }
}

function transitionDisplay(element, effect, timing = "regular") {
  const transitionClasses = generateTransitionClasses(effect, timing);
  const transitionStages = determineTransitionStages(element, effect, transitionClasses);

  if (!transitionStages.isShowing && !transitionStages.isWaiting) enter(element, transitionClasses);
  if (transitionStages.isShowing && !transitionStages.isWaiting && transitionStages.isEntering) cancelEnter(element, transitionClasses);
  if (transitionStages.isShowing && !transitionStages.isWaiting && !transitionStages.isEntering) leave(element, transitionClasses);
  if (transitionStages.isWaiting) wait(element);
}

export default transitionDisplay;
