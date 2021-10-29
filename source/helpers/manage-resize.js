// MANAGE RESIZE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_RESIZING = "is-resizing";
const DATA_RESIZE = "data-resize";

function manageResize(trigger) {
  const targetId = trigger.getAttribute(DATA_RESIZE);
  const target = document.querySelector(`#${targetId}`);
  const isShown = target.classList.contains(CLASS_SHOWN);
  const isToggling = target.classList.contains(CLASS_RESIZING);

  if (!isToggling) {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    target.classList.add(CLASS_RESIZING);
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
        target.classList.remove(CLASS_RESIZING);
        target.classList.toggle(CLASS_SHOWN);
        target.style.overflowY = "";
        target.style.height = isShown ? 0 : "auto";
      },
      { once: true }
    );
  }
}

export default manageResize;
