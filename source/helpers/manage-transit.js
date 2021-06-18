// MANAGE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITING_IN = "is-transiting-in";
const CLASS_TRANSITING_OUT = "is-transiting-out";

function manageTransit(phase, ...elements) {
  elements.forEach((element) => {
    const handleAnimationEnd = () => {
      if (phase === "in") {
        element.classList.remove(CLASS_TRANSITING_IN);
      } else if (phase === "out") {
        element.classList.remove(CLASS_TRANSITING_OUT);
        element.classList.remove(CLASS_SHOWN);
      }

      element.removeEventListener("animationend", handleAnimationEnd);
    };

    if (phase === "in") {
      element.classList.add(CLASS_SHOWN);
      element.classList.add(CLASS_TRANSITING_IN);
    } else if (phase === "out") {
      element.classList.add(CLASS_TRANSITING_OUT);
    }

    element.addEventListener("animationend", handleAnimationEnd);
  });
}

export default manageTransit;
