// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_TRANSITING_IN = "is-transiting-in";
const CLASS_TRANSITING_OUT = "is-transiting-out";

function manageTransit(phase, element) {
  if (phase === "in") {
    element.classList.add(CLASS_TRANSITING_IN);
  } else if (phase === "out") {
    element.classList.add(CLASS_TRANSITING_OUT);
  }

  return new Promise((resolve) => {
    const handleAnimationEnd = () => {
      if (phase === "in") {
        element.classList.remove(CLASS_TRANSITING_IN);
      } else if (phase === "out") {
        element.classList.remove(CLASS_TRANSITING_OUT);
      }

      element.removeEventListener("animationend", handleAnimationEnd);
      resolve();
    };

    element.addEventListener("animationend", handleAnimationEnd);
  });
}

export default manageTransit;
