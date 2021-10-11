// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";

function manageTransit(...items) {
  items.forEach((item) => {
    const isShown = item.classList.contains(CLASS_SHOWN);
    const phaseClass = isShown ? "is-transiting-out" : "is-transiting-in";

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
