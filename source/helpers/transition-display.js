// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, transition) {
  const phase = element.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const transitionClass = `${transition}-${phase}`;
  const isEntering = phase === "enter" ? true : false;
  const isExpandable = transition === "expand-regular" ? true : false;

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
          if (!isEntering) element.classList.remove(CLASS_SHOWN);
          element.classList.remove(transitionClass);
          if (!isExpandable) {
            element.classList.remove(`${transitionClass}-to`);
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
