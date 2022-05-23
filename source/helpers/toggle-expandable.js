// TOGGLE EXPANDABLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "activated";
const CLASS_SHOWN = "shown";
const DATA_TOGGLE = "data-toggle";

function toggleExpandable(trigger, transition) {
  const expandableId = trigger.getAttribute(DATA_TOGGLE);
  const expandable = document.getElementById(expandableId);
  const phase = expandable.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const phasingClass = `${transition}-${phase}`;

  if (phase === "enter") expandable.classList.add(CLASS_SHOWN);
  expandable.classList.add(phasingClass);

  requestAnimationFrame(() => {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", phase === "enter" ? "true" : "false");
    expandable.style.overflowY = "hidden";
    expandable.style.height = phase === "enter" ? 0 : expandable.scrollHeight + "px";

    requestAnimationFrame(() => {
      expandable.style.height = phase === "enter" ? expandable.scrollHeight + "px" : 0;

      expandable.addEventListener(
        "transitionend",
        () => {
          expandable.classList.remove(phasingClass);
          if (phase === "leave") expandable.classList.remove(CLASS_SHOWN);
          expandable.style.overflowY = "";
          expandable.style.height = phase === "enter" ? "auto" : 0;
        },
        { once: true }
      );
    });
  });
}

export default toggleExpandable;
