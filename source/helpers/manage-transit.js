// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITING_IN = "is-transiting-in";
const CLASS_TRANSITING_OUT = "is-transiting-out";

function manageTransit(...items) {
  items.forEach((item) => {
    const isShown = item.classList.contains(CLASS_SHOWN);
    const phaseClass = isShown ? CLASS_TRANSITING_OUT : CLASS_TRANSITING_IN;

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

export default manageTransit;
