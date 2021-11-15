// TOGGLE CONVERTIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_CONVERTING = "is-converting";
const CLASS_SHOWN = "is-shown";
const DATA_CONVERT = "data-convert";

function toggleConvertible(trigger) {
  const convertibleId = trigger.getAttribute(DATA_CONVERT);
  const convertible = document.querySelector(`#${convertibleId}`);
  const isShown = convertible.classList.contains(CLASS_SHOWN);
  const isConverting = convertible.classList.contains(CLASS_CONVERTING);

  if (!isConverting) {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    convertible.classList.add(CLASS_CONVERTING);
    convertible.style.overflowY = "hidden";

    requestAnimationFrame(() => {
      convertible.style.height = isShown ? convertible.scrollHeight + "px" : 0;

      requestAnimationFrame(() => {
        convertible.style.height = isShown ? 0 : convertible.scrollHeight + "px";
      });
    });

    convertible.addEventListener(
      "transitionend",
      () => {
        convertible.classList.remove(CLASS_CONVERTING);
        convertible.classList.toggle(CLASS_SHOWN);
        convertible.style.overflowY = "";
        convertible.style.height = isShown ? 0 : "auto";
      },
      { once: true }
    );
  }
}

export default toggleConvertible;
