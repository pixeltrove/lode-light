// TRANSITION DISPLAY
// -----------------------------------------------------------------------------

const CLASS_SHOWN = "shown";

function transitionDisplay(element, transition, timing) {
  const phase = element.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const transitionClass = `${transition}-${timing}-${phase}`;
  const isEntering = phase === "enter" ? true : false;
  const isExpandable = transition === "expand" ? true : false;

  if (isEntering) element.classList.add(CLASS_SHOWN);
  element.classList.add(transitionClass);
  if (!isExpandable) element.classList.add(`${transitionClass}-from`);

  requestAnimationFrame(() => {
    if (!isExpandable) {
      element.classList.remove(`${transitionClass}-from`);
      element.classList.add(`${transitionClass}-to`);
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
