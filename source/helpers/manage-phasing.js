// MANAGE PHASING
// -----------------------------------------------------------------------------

const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_PHASING_OUT = "is-phasing-out";
const CLASS_SHOWN = "is-shown";

function managePhasing(...elements) {
  elements.forEach((element) => {
    const isShown = element.classList.contains(CLASS_SHOWN);
    const phasingClass = isShown ? CLASS_PHASING_OUT : CLASS_PHASING_IN;

    element.classList.add(phasingClass);

    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(phasingClass);
        element.classList.toggle(CLASS_SHOWN);
      },
      { once: true }
    );
  });
}

export function enter(element, transition) {
  element.classList.add(`${transition}-enter`);
  element.classList.add(`${transition}-enter-start`);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(`${transition}-enter-start`);
      element.classList.add(`${transition}-enter-end`);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(`${transition}-enter-end`);
          element.classList.remove(`${transition}-enter`);
          element.classList.add(CLASS_SHOWN);
        },
        { once: true }
      );
    });
  });
}

export function leave(element, transition) {
  element.classList.remove(CLASS_SHOWN);

  element.classList.add(`${transition}-leave`);
  element.classList.add(`${transition}-leave-start`);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(`${transition}-leave-start`);
      element.classList.add(`${transition}-leave-end`);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(`${transition}-leave-end`);
          element.classList.remove(`${transition}-leave`);
        },
        { once: true }
      );
    });
  });
}

export default managePhasing;
