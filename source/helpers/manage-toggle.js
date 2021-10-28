// MANAGE TOGGLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TOGGLING = "is-toggling";
const DATA_TOGGLE = "data-toggle";

function manageToggle(trigger) {
  const targetId = trigger.getAttribute(DATA_TOGGLE);
  const target = document.querySelector(`#${targetId}`);
  const isShown = target.classList.contains(CLASS_SHOWN);
  const isToggling = target.classList.contains(CLASS_TOGGLING);

  if (!isToggling) {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    target.classList.add(CLASS_TOGGLING);
    target.style.overflowY = "hidden";

    requestAnimationFrame(() => {
      target.style.height = isShown ? target.scrollHeight + "px" : 0;

      requestAnimationFrame(() => {
        target.style.height = isShown ? 0 : target.scrollHeight + "px";
      });
    });

    target.addEventListener(
      "transitionend",
      () => {
        target.classList.remove(CLASS_TOGGLING);
        target.classList.toggle(CLASS_SHOWN);
        target.style.overflowY = "";
        target.style.height = isShown ? 0 : "auto";
      },
      { once: true }
    );
  }
}

export default manageToggle;
