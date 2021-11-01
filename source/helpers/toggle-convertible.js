// TOGGLE CONVERTIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_CONVERTING = "is-converting";
const DATA_CONVERT = "data-convert";

function toggleConvertible(trigger) {
  const targetId = trigger.getAttribute(DATA_CONVERT);
  const target = document.querySelector(`#${targetId}`);
  const isShown = target.classList.contains(CLASS_SHOWN);
  const isConverting = target.classList.contains(CLASS_CONVERTING);

  if (!isConverting) {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    target.classList.add(CLASS_CONVERTING);
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
        target.classList.remove(CLASS_CONVERTING);
        target.classList.toggle(CLASS_SHOWN);
        target.style.overflowY = "";
        target.style.height = isShown ? 0 : "auto";
      },
      { once: true }
    );
  }
}

export default toggleConvertible;
