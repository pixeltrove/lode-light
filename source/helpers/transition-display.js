// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, transition) {
  const phase = element.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const isEntering = phase === "enter" ? true : false;
  const isExpandable = transition === "expand-regular" ? true : false;
  const transitionClass = `${transition}-${phase}`;

  if (isEntering) element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClass);
  if (!isExpandable) element.classList.add(`${transitionClass}-from`);

  requestAnimationFrame(() => {
    if (!isExpandable) {
      element.classList.remove(`${transition}-${phase}-from`);
      element.classList.add(`${transition}-${phase}-to`);
    } else {
      element.style.overflowY = "hidden";
      element.style.height = isEntering ? 0 : element.scrollHeight + "px";
    }
    requestAnimationFrame(() => {
      if (isExpandable) element.style.height = isEntering ? element.scrollHeight + "px" : 0;

      element.addEventListener(
        "transitionend",
        () => {
          if (!isExpandable) {
            element.classList.remove(`${transitionClass}-to`);
          } else {
            element.style.overflowY = "";
            element.style.height = isEntering ? "auto" : 0;
          }
          element.classList.remove(transitionClass);
          if (!isEntering) element.classList.remove(CLASS_SHOWN);
        },
        { once: true }
      );
    });
  });
}

export default transitionDisplay;
