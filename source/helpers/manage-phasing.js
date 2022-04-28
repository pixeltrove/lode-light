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

export function phaseIn(element, transition) {
  element.classList.add(`${transition}-in-regular`);
  element.classList.add(`${transition}-in-regular-start`);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(`${transition}-in-regular-start`);
      element.classList.add(`${transition}-in-regular-end`);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(`${transition}-in-regular-end`);
          element.classList.remove(`${transition}-in-regular`);
          element.classList.add(CLASS_SHOWN);
        },
        { once: true }
      );
    });
  });
}

export function phaseOut(element, transition) {
  element.classList.remove(CLASS_SHOWN);

  element.classList.add(`${transition}-out-regular`);
  element.classList.add(`${transition}-out-regular-start`);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.classList.remove(`${transition}-out-regular-start`);
      element.classList.add(`${transition}-out-regular-end`);

      element.addEventListener(
        "transitionend",
        () => {
          element.classList.remove(`${transition}-out-regular-end`);
          element.classList.remove(`${transition}-out-regular`);
        },
        { once: true }
      );
    });
  });
}

export default managePhasing;
