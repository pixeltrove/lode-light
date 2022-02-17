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

export default managePhasing;
