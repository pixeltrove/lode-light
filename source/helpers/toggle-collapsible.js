// TOGGLE COLLAPSIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "activated";
const CLASS_PHASING = "phasing";
const CLASS_SHOWN = "shown";
const DATA_TOGGLE = "data-toggle";

function toggleCollapsible(trigger) {
  const collapsibleId = trigger.getAttribute(DATA_TOGGLE);
  const collapsible = document.getElementById(collapsibleId);
  const phase = collapsible.classList.contains(CLASS_SHOWN) ? "leave" : "enter";

  if (phase === "enter") collapsible.classList.add(CLASS_SHOWN);
  collapsible.classList.add(CLASS_PHASING);

  requestAnimationFrame(() => {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", phase === "enter" ? "true" : "false");
    collapsible.style.overflowY = "hidden";
    collapsible.style.height = phase === "enter" ? 0 : collapsible.scrollHeight + "px";

    requestAnimationFrame(() => {
      collapsible.style.height = phase === "enter" ? collapsible.scrollHeight + "px" : 0;

      collapsible.addEventListener(
        "transitionend",
        () => {
          collapsible.classList.remove(CLASS_PHASING);
          if (phase === "leave") collapsible.classList.remove(CLASS_SHOWN);
          collapsible.style.overflowY = "";
          collapsible.style.height = phase === "enter" ? "auto" : 0;
        },
        { once: true }
      );
    });
  });
}

export default toggleCollapsible;
