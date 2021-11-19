// TOGGLE POPPABLE
// -----------------------------------------------------------------------------

const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_PHASING_OUT = "is-phasing-out";
const CLASS_SHOWN = "is-shown";

function togglePoppable(...items) {
  items.forEach((item) => {
    const isShown = item.classList.contains(CLASS_SHOWN);
    const phaseClass = isShown ? CLASS_PHASING_OUT : CLASS_PHASING_IN;

    item.classList.add(phaseClass);

    item.addEventListener(
      "animationend",
      () => {
        item.classList.remove(phaseClass);
        item.classList.toggle(CLASS_SHOWN);
      },
      { once: true }
    );
  });
}

export default togglePoppable;
