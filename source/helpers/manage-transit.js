// MANAGE TRANSIT
// -----------------------------------------------------------------------------

function manageTransit(element, phase) {
  const phaseClass = "is-transiting-" + `${phase}`;

  element.classList.add(phaseClass);

  return new Promise((resolve) => {
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(phaseClass);
        resolve();
      },
      { once: true }
    );
  });
}

export default manageTransit;
