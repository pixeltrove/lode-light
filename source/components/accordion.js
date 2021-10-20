// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_PANEL = ".accordion-panel";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TOGGLING = "is-toggling";
const DATA_TOGGLE = "data-toggle";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const panels = Array.from(accordion.querySelectorAll(SELECTOR_PANEL));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function setPanelHeight() {
    panels.forEach((panel) => {
      const isShown = panel.classList.contains(CLASS_SHOWN);

      panel.style.height = isShown ? panel.scrollHeight + "px" : 0;
    });
  }

  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TOGGLE);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    slat.classList.toggle(CLASS_ACTIVATED);
    slat.setAttribute("aria-expanded", isShown ? "false" : "true");
    panel.classList.add(CLASS_TOGGLING);
    panel.style.height = isShown ? 0 : panel.scrollHeight + "px";
    panel.style.overflowY = "hidden";

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TOGGLING);
        panel.classList.toggle(CLASS_SHOWN);
        panel.style.overflowY = "";
      },
      { once: true }
    );
  }

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      togglePanel(targetSlat);
    }
  }

  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  setPanelHeight();

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
