// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, effect, timing) {
  const phase = element.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const transition = `${effect}-${timing}-${phase}`;
  const transitionFrom = `${transition}-from`;
  const transitionTo = `${transition}-to`;
  const isEntering = phase === "enter" ? true : false;
  const isExpandable = effect === "expand" ? true : false;

  if (isEntering) element.classList.add(CLASS_SHOWN);
  element.classList.add(transition);
  if (!isExpandable) {
    element.classList.add(transitionFrom);
  } else {
    element.style.overflowY = "hidden";
    element.style.height = isEntering ? 0 : element.scrollHeight + "px";
  }

  requestAnimationFrame(() => {
    if (!isExpandable) {
      element.classList.remove(transitionFrom);
      element.classList.add(transitionTo);
    } else {
      element.style.height = isEntering ? element.scrollHeight + "px" : 0;
    }

    requestAnimationFrame(() => {
      element.addEventListener(
        "transitionend",
        () => {
          if (!isEntering) element.classList.remove(CLASS_SHOWN);
          element.classList.remove(transition);
          if (!isExpandable) {
            element.classList.remove(transitionTo);
          } else {
            element.style.overflowY = "";
            element.style.height = isEntering ? "auto" : 0;
          }
        },
        { once: true }
      );
    });
  });
}

export default transitionDisplay;
