// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, transition, phase) {
  if (phase === "enter") element.classList.add(CLASS_SHOWN);
  element.classList.add(`${transition}-${phase}`);
  element.classList.add(`${transition}-${phase}-from`);

  requestAnimationFrame(() => {
    element.classList.remove(`${transition}-${phase}-from`);
    element.classList.add(`${transition}-${phase}-to`);

    requestAnimationFrame(() => {
      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(`${transition}-${phase}-to`);
          element.classList.remove(`${transition}-${phase}`);
          if (phase === "leave") element.classList.remove(CLASS_SHOWN);
        },
        { once: true }
      );
    });
  });
}

export default transitionDisplay;
