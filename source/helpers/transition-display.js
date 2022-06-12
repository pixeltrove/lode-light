// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, effect, timing = "regular") {
  const enterTransition = `${effect}-${timing}-enter`;
  const enterFrom = `${enterTransition}-from`;
  const enterTo = `${enterTransition}-to`;
  const leaveTransition = `${effect}-${timing}-leave`;
  const leaveFrom = `${leaveTransition}-from`;
  const leaveTo = `${leaveTransition}-to`;
  const isWaiting = effect === "wait" ? true : false;
  const isShowing = element.classList.contains(CLASS_SHOWN);
  const isEntering = element.classList.contains(enterTransition);

  function enter() {
    element.classList.add(CLASS_SHOWN);
    element.classList.add(enterTransition);
    element.classList.add(enterFrom);

    requestAnimationFrame(() => {
      element.classList.remove(enterFrom);
      element.classList.add(enterTo);

      element.addEventListener("transitionend", enterEnd);
    });
  }

  function enterEnd() {
    element.classList.remove(enterTo);
    element.classList.remove(enterTransition);

    element.removeEventListener("transitionend", enterEnd);
  }

  function cancelEnter() {
    element.classList.remove(enterTo);
    element.classList.add(enterFrom);

    element.addEventListener("transitionend", cancelEnterEnd);
  }

  function cancelEnterEnd() {
    element.classList.remove(enterFrom);
    element.classList.remove(enterTransition);
    requestAnimationFrame(() => {
      element.classList.remove(CLASS_SHOWN);
    });

    element.removeEventListener("transitionend", cancelEnterEnd);
  }

  function leave() {
    element.classList.add(leaveTransition);
    element.classList.add(leaveFrom);

    requestAnimationFrame(() => {
      element.classList.remove(leaveFrom);
      element.classList.add(leaveTo);

      element.addEventListener("transitionend", leaveEnd);
    });
  }

  function leaveEnd() {
    element.classList.remove(leaveTo);
    element.classList.remove(leaveTransition);
    requestAnimationFrame(() => {
      element.classList.remove(CLASS_SHOWN);
    });

    element.removeEventListener("transitionend", leaveEnd);
  }

  if (!isShowing && !isWaiting) enter();
  if (isShowing && isEntering && !isWaiting) {
    cancelEnter();
  }
  if (isShowing && !isEntering && !isWaiting) leave();

  if (!isShowing && isWaiting) element.classList.add(CLASS_SHOWN);
  if (isShowing && isWaiting) {
    setTimeout(() => {
      element.classList.remove(CLASS_SHOWN);
    }, "280");
  }
}

export default transitionDisplay;
