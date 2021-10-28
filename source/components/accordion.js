// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";
import manageToggle from "../helpers/manage-toggle";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      manageToggle(targetSlat);
    }
  }

  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
