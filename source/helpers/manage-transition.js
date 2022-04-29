// MANAGE TRANSITION
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";

function manageTransition(element, transition, phase) {
  if (phase === "enter") {
    element.classList.add(CLASS_SHOWN);
  }
  element.classList.add(`${transition}-${phase}`);
  element.classList.add(`${transition}-${phase}-start`);

  requestAnimationFrame(() => {
    element.classList.remove(`${transition}-${phase}-start`);
    element.classList.add(`${transition}-${phase}-end`);
  });

  element.addEventListener(
    "transitionend",
    () => {
      element.classList.remove(`${transition}-${phase}-end`);
      element.classList.remove(`${transition}-${phase}`);
      if (phase === "leave") {
        element.classList.remove(CLASS_SHOWN);
      }
    },
    { once: true }
  );
}

export default manageTransition;
