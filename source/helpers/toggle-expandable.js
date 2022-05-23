// TOGGLE EXPANDABLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "activated";
const CLASS_SHOWN = "shown";
const DATA_TOGGLE = "data-toggle";

function toggleExpandable(trigger, transition) {
  const expandableId = trigger.getAttribute(DATA_TOGGLE);
  const expandable = document.getElementById(expandableId);
  const phase = expandable.classList.contains(CLASS_SHOWN) ? "leave" : "enter";
  const isEntering = phase === "enter";
  const isLeaving = phase === "leave";
  const transitionClass = `${transition}-${phase}`;

  if (isEntering) expandable.classList.add(CLASS_SHOWN);
  expandable.classList.add(transitionClass);

  requestAnimationFrame(() => {
    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", isEntering ? "true" : "false");
    expandable.style.overflowY = "hidden";
    expandable.style.height = isEntering ? 0 : expandable.scrollHeight + "px";

    requestAnimationFrame(() => {
      expandable.style.height = isEntering ? expandable.scrollHeight + "px" : 0;

      expandable.addEventListener(
        "transitionend",
        () => {
          expandable.classList.remove(transitionClass);
          if (isLeaving) expandable.classList.remove(CLASS_SHOWN);
          expandable.style.overflowY = "";
          expandable.style.height = isEntering ? "auto" : 0;
        },
        { once: true }
      );
    });
  });
}

export default toggleExpandable;
