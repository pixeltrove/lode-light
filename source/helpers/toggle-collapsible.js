// TOGGLE COLLAPSIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TOGGLING = "is-toggling";
const DATA_TARGET = "data-target";

function toggleCollapsible(trigger) {
  const collapsibleId = trigger.getAttribute(DATA_TARGET);
  const collapsible = document.querySelector(`#${collapsibleId}`);
  const isShown = collapsible.classList.contains(CLASS_SHOWN);

  trigger.classList.toggle(CLASS_ACTIVATED);
  trigger.setAttribute("aria-expanded", !isShown);

  collapsible.style.height = !isShown ? 0 : collapsible.scrollHeight + "px";

  if (!isShown) collapsible.classList.add(CLASS_SHOWN);
  collapsible.classList.add(CLASS_TOGGLING);

  requestAnimationFrame(() => {
    collapsible.style.height = !isShown ? collapsible.scrollHeight + "px" : 0;
  });

  collapsible.addEventListener(
    "transitionend",
    () => {
      collapsible.classList.remove(CLASS_TOGGLING);
      if (isShown) collapsible.classList.remove(CLASS_SHOWN);
    },
    { once: true }
  );
}

export default toggleCollapsible;
