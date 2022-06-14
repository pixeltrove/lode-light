// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function enter(element, effect, timing = "regular") {
  const enterTransition = `${effect}-${timing}-enter`;
  const enterFrom = `${enterTransition}-from`;
  const enterTo = `${enterTransition}-to`;
  const isShowing = element.classList.contains(CLASS_SHOWN);

  function enterCancel() {
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

  if (isShowing) enterCancel();

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

function leave(element, effect, timing = "regular") {
  const leaveTransition = `${effect}-${timing}-leave`;
  const leaveFrom = `${leaveTransition}-from`;
  const leaveTo = `${leaveTransition}-to`;

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
