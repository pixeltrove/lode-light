// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TOGGLING = "is-toggling";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));

  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    slat.classList.toggle(CLASS_ACTIVATED);
    slat.setAttribute("aria-expanded", !isShown);

    isShown ? toggleToHidden(panel) : toggleToShown(panel);
  }

  function toggleToShown(panel) {
    panel.classList.add(CLASS_SHOWN);
    panel.classList.add(CLASS_TOGGLING);
    panel.style.height = panel.scrollHeight + "px";

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TOGGLING);
      },
      { once: true }
    );
  }

  function toggleToHidden(panel) {
    panel.classList.add(CLASS_TOGGLING);
    panel.style.height = 0;

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TOGGLING);
        panel.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );
  }

  function handleSlatClick(event) {
    if (event.target.closest(SELECTOR_SLAT)) {
      togglePanel(event.target.closest(SELECTOR_SLAT));
    }
  }

  function handleSlatKeydown(event) {
    if (event.target.closest(SELECTOR_SLAT) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
