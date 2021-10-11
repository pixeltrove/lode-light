// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";

function manageTransit(phase, item, ...auxiliaries) {
  const phaseClass = "is-transiting-" + `${phase}`;

  item.classList.add(phaseClass);
  auxiliaries.forEach((auxiliary) => {
    auxiliary.classList.add(phaseClass);
  });

  requestAnimationFrame(() => {
    if (phase === "in") {
      item.classList.add(CLASS_SHOWN);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.add(CLASS_SHOWN);
      });
    } else if (phase === "out") {
      item.classList.remove(CLASS_SHOWN);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.remove(CLASS_SHOWN);
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
