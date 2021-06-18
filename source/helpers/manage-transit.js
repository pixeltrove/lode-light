// MANAGE TRANSIT
// -----------------------------------------------------------------------------

function manageTransit(phase, element) {
  const phaseClass = "is-transiting-" + `${phase}`;

  element.classList.add(phaseClass);

  return new Promise((resolve) => {
    const handleAnimationEnd = () => {
      element.classList.remove(phaseClass);

      element.removeEventListener("animationend", handleAnimationEnd);
      resolve();
    };

    element.addEventListener("animationend", handleAnimationEnd);
  });
}

export default manageTransit;
