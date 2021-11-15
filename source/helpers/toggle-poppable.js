// TOGGLE POPPABLE
// -----------------------------------------------------------------------------

const CLASS_POPPING_IN = "is-popping-in";
const CLASS_POPPING_OUT = "is-popping-out";
const CLASS_SHOWN = "is-shown";

function togglePoppable(...items) {
  items.forEach((item) => {
    const isShown = item.classList.contains(CLASS_SHOWN);
    const phaseClass = isShown ? CLASS_POPPING_OUT : CLASS_POPPING_IN;

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
