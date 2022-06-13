// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function enter(element, effect, timing = "regular") {
  const enterTransition = `${effect}-${timing}-enter`;
  const enterFrom = `${enterTransition}-from`;
  const enterTo = `${enterTransition}-to`;
  const isShowing = element.classList.contains(CLASS_SHOWN);

  function enterEnd() {
    element.classList.remove(enterTo);
    element.classList.remove(enterTransition);

    element.removeEventListener("transitionend", enterEnd);
  }

  function enterCancel() {
    element.classList.remove(enterTo);
    element.classList.add(enterFrom);

    element.addEventListener("transitionend", enterCancelEnd);
  }

  function enterCancelEnd() {
    element.classList.remove(enterFrom);
    element.classList.remove(enterTransition);
    requestAnimationFrame(() => {
      element.classList.remove(CLASS_SHOWN);
    });

    element.removeEventListener("transitionend", enterCancelEnd);
  }

  if (isShowing) enterCancel();

  element.classList.add(CLASS_SHOWN);
  element.classList.add(enterTransition);
  element.classList.add(enterFrom);

  requestAnimationFrame(() => {
    element.classList.remove(enterFrom);
    element.classList.add(enterTo);

    element.addEventListener("transitionend", enterEnd);
  });
}

function leave(element, effect, timing = "regular") {
  const leaveTransition = `${effect}-${timing}-leave`;
  const leaveFrom = `${leaveTransition}-from`;
  const leaveTo = `${leaveTransition}-to`;

  function leaveEnd() {
    element.classList.remove(leaveTo);
    element.classList.remove(leaveTransition);
    requestAnimationFrame(() => {
      element.classList.remove(CLASS_SHOWN);
    });

    element.removeEventListener("transitionend", leaveEnd);
  }

  element.classList.add(leaveTransition);
  element.classList.add(leaveFrom);

  requestAnimationFrame(() => {
    element.classList.remove(leaveFrom);
    element.classList.add(leaveTo);

    element.addEventListener("transitionend", leaveEnd);
  });
}

function wait(element) {
  const isShowing = element.classList.contains(CLASS_SHOWN);

  if (!isShowing) element.classList.add(CLASS_SHOWN);
  if (isShowing) {
    setTimeout(() => {
      element.classList.remove(CLASS_SHOWN);
    }, "280");
  }
}

export { enter, leave, wait };
