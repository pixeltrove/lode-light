// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, effect, timing) {
  const phase = element.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const transition = `${effect}-${timing}-${phase}`;
  const isEntering = phase === "enter" ? true : false;
  const isExpandable = effect === "expand" ? true : false;

  if (isEntering) element.classList.add(CLASS_SHOWN);
  element.classList.add(transition);
  if (!isExpandable) element.classList.add(`${transition}-from`);

  requestAnimationFrame(() => {
    if (!isExpandable) {
      element.classList.remove(`${transition}-from`);
      element.classList.add(`${transition}-to`);
    } else {
      element.style.overflowY = "hidden";
      element.style.height = isEntering ? 0 : element.scrollHeight + "px";
    }

    requestAnimationFrame(() => {
      if (isExpandable) element.style.height = isEntering ? element.scrollHeight + "px" : 0;

      element.addEventListener(
        "transitionend",
        () => {
          if (!isEntering) element.classList.remove(CLASS_SHOWN);
          element.classList.remove(transition);
          if (!isExpandable) {
            element.classList.remove(`${transition}-to`);
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
