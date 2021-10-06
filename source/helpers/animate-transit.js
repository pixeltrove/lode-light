// ANIMATE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITING = "is-transiting";

function animateTransit(phase, item, ...auxiliaries) {
  item.classList.add(CLASS_TRANSITING);
  auxiliaries.forEach((auxiliary) => {
    auxiliary.classList.add(CLASS_TRANSITING);
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
    "transitionend",
    () => {
      item.classList.remove(CLASS_TRANSITING);
      auxiliaries.forEach((auxiliary) => {
        auxiliary.classList.remove(CLASS_TRANSITING);
      });
    },
    { once: true }
  );
}

export default animateTransit;
