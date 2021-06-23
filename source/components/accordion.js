// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";
import toggleCollapsible from "../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));

  function handleSlatClick(event) {
    if (event.target.closest(SELECTOR_SLAT)) {
      toggleCollapsible(event.target.closest(SELECTOR_SLAT));
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
