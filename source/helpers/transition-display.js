// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, effect, timing = "regular") {
  const isShowing = element.classList.contains(CLASS_SHOWN);
  const isWaiting = effect === "wait" ? true : false;
  const enterTransition = `${effect}-${timing}-enter`;
  const enterFrom = `${enterTransition}-from`;
  const enterTo = `${enterTransition}-to`;
  const leaveTransition = `${effect}-${timing}-leave`;
  const leaveFrom = `${leaveTransition}-from`;
  const leaveTo = `${leaveTransition}-to`;

  function enter() {
    element.classList.add(CLASS_SHOWN);
    element.classList.add(enterTransition);
    element.classList.add(enterFrom);

    requestAnimationFrame(() => {
      element.classList.remove(enterFrom);
      element.classList.add(enterTo);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(enterTo);
          element.classList.remove(enterTransition);
        },
        { once: true }
      );
    });
  }

  function cancelEnter() {
    element.classList.remove(enterTo);
    element.classList.add(enterFrom);

    element.addEventListener(
      "transitionend",
      () => {
        element.classList.remove(enterFrom);
        element.classList.remove(enterTransition);

        requestAnimationFrame(() => {
          element.classList.remove(CLASS_SHOWN);
        });
      },
      { once: true }
    );
  }

  function leave() {
    element.classList.add(leaveTransition);
    element.classList.add(leaveFrom);

    requestAnimationFrame(() => {
      element.classList.remove(leaveFrom);
      element.classList.add(leaveTo);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(leaveTo);
          element.classList.remove(leaveTransition);

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
  if (isShowing && !isWaiting && element.classList.contains(enterTransition)) cancelEnter();
  if (isShowing && !isWaiting && !element.classList.contains(enterTransition)) leave();
  if (isWaiting) wait();
}

export default transitionDisplay;
