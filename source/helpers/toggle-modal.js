// TOGGLE MODAL
// -----------------------------------------------------------------------------

const CLASS_REVEALING = "is-revealing";
const CLASS_CONCEALING = "is-concealing";
const CLASS_SHOWN = "is-shown";

function toggleModal(...items) {
  items.forEach((item) => {
    const isShown = item.classList.contains(CLASS_SHOWN);
    const phaseClass = isShown ? CLASS_CONCEALING : CLASS_REVEALING;

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

export default toggleModal;
