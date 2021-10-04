// ANIMATE TRANSIT
// -----------------------------------------------------------------------------

const CLASS_TRANSITING = "is-transiting";
const CLASS_SHOWN = "is-shown";

function animateTransit(phase, ...items) {
  items.forEach((item) => {
    item.classList.add(CLASS_TRANSITING);
    requestAnimationFrame(() => {
      if (phase === "in") {
        item.classList.add(CLASS_SHOWN);
      } else if (phase === "out") {
        item.classList.remove(CLASS_SHOWN);
      }
    });
    item.addEventListener(
      "transitionend",
      () => {
        item.classList.remove(CLASS_TRANSITING);
      },
      { once: true }
    );
  });
}

export default animateTransit;
