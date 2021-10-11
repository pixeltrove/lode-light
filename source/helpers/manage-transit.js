// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";

function manageTransit(item, ...auxiliaries) {
  const isShown = item.classList.contains(CLASS_SHOWN);
  const phaseClass = isShown ? "is-transiting-out" : "is-transiting-in";

  item.classList.add(phaseClass);
  auxiliaries.forEach((auxiliary) => {
    auxiliary.classList.add(phaseClass);
  });

  requestAnimationFrame(() => {
    if (isShown) {
      item.classList.remove(CLASS_SHOWN);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.remove(CLASS_SHOWN);
      });
    } else if (!isShown) {
      item.classList.add(CLASS_SHOWN);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.add(CLASS_SHOWN);
      });
    }
  });

  item.addEventListener(
    "animationend",
    () => {
      item.classList.remove(phaseClass);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.remove(phaseClass);
      });
    },
    { once: true }
  );
}

export default manageTransit;
