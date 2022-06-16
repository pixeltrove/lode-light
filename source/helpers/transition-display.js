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

function transitionDisplay(element, effect, timing = "regular") {
  const isShowing = element.classList.contains(CLASS_SHOWN);
  const isWaiting = effect === "wait" ? true : false;
  const transitionClasses = generateTransitionClasses(effect, timing);

  function enter() {
    element.classList.add(CLASS_SHOWN);
    element.classList.add(transitionClasses.enter);
    element.classList.add(transitionClasses.enterFrom);

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
  }

  function cancelEnter() {
    element.classList.remove(transitionClasses.enterTo);
    element.classList.add(transitionClasses.enterFrom);

    element.addEventListener(
      "transitionend",
      () => {
        element.classList.remove(transitionClasses.enterFrom);
        element.classList.remove(transitionClasses.enter);

        requestAnimationFrame(() => {
          element.classList.remove(CLASS_SHOWN);
        });
      },
      { once: true }
    );
  }

  function leave() {
    element.classList.add(transitionClasses.leave);
    element.classList.add(transitionClasses.leaveFrom);

    requestAnimationFrame(() => {
      element.classList.remove(transitionClasses.leaveFrom);
      element.classList.add(transitionClasses.leaveTo);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(transitionClasses.leaveTo);
          element.classList.remove(transitionClasses.leave);

          requestAnimationFrame(() => {
            element.classList.remove(CLASS_SHOWN);
          });
        },
        { once: true }
      );
    });
  }

  function wait() {
    if (!element.classList.contains(CLASS_SHOWN)) {
      element.classList.add(CLASS_SHOWN);
    } else {
      setTimeout(() => {
        element.classList.remove(CLASS_SHOWN);
      }, 280);
    }
  }

  if (!isShowing && !isWaiting) enter();
  if (isShowing && !isWaiting && element.classList.contains(transitionClasses.enter)) cancelEnter();
  if (isShowing && !isWaiting && !element.classList.contains(transitionClasses.enter)) leave();
  if (isWaiting) wait();
}

export default transitionDisplay;
