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

    requestAnimationFrame(() => {
      if (isShown) {
        item.classList.remove(CLASS_SHOWN);
      } else {
        item.classList.add(CLASS_SHOWN);
      }
    });

    item.addEventListener(
      "animationend",
      () => {
        item.classList.remove(phaseClass);
      },
      { once: true }
    );
  });
}

export default manageTransit;
