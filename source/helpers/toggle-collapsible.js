// TOGGLE COLLAPSIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "activated";
const CLASS_PHASING = "phasing";
const CLASS_SHOWN = "shown";
const DATA_TOGGLE = "data-toggle";

function toggleCollapsible(trigger) {
  const collapsibleId = trigger.getAttribute(DATA_TOGGLE);
  const collapsible = document.getElementById(collapsibleId);
  const isShown = collapsible.classList.contains(CLASS_SHOWN);

  if (!isShown) collapsible.classList.add(CLASS_SHOWN);
  collapsible.classList.add(CLASS_PHASING);

  requestAnimationFrame(() => {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isShown ? "false" : "true");
    collapsible.style.overflowY = "hidden";
    collapsible.style.height = isShown ? collapsible.scrollHeight + "px" : 0;

    requestAnimationFrame(() => {
      collapsible.style.height = isShown ? 0 : collapsible.scrollHeight + "px";

      collapsible.addEventListener(
        "transitionend",
        () => {
          collapsible.classList.remove(CLASS_PHASING);
          if (isShown) collapsible.classList.remove(CLASS_SHOWN);
          collapsible.style.overflowY = "";
          collapsible.style.height = isShown ? 0 : "auto";
        },
        { once: true }
      );
    });
  });
}

export default toggleCollapsible;
