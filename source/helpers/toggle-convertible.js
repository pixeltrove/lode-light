// TOGGLE CONVERTIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_PHASING = "is-phasing";
const CLASS_SHOWN = "is-shown";
const DATA_TOGGLE = "data-toggle";

function toggleConvertible(trigger) {
  const convertibleId = trigger.getAttribute(DATA_TOGGLE);
  const convertible = document.querySelector(`#${convertibleId}`);
  const isShown = convertible.classList.contains(CLASS_SHOWN);
  const isPhasing = convertible.classList.contains(CLASS_PHASING);

  if (!isPhasing) {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    convertible.classList.add(CLASS_PHASING);
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
        convertible.classList.remove(CLASS_PHASING);
        convertible.classList.toggle(CLASS_SHOWN);
        convertible.style.overflowY = "";
        convertible.style.height = isShown ? 0 : "auto";
      },
      { once: true }
    );
  }
}

export default toggleConvertible;
