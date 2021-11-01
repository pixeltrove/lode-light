// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";
import toggleConvertible from "../helpers/toggle-convertible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function handleSlatClick(event) {
    const pressedSlat = event.target.closest(SELECTOR_SLAT);

    if (pressedSlat) {
      toggleConvertible(pressedSlat);
    }
  }

  function handleSlatKeydown(event) {
    const pressedSlat = event.target.closest(SELECTOR_SLAT);

    if (pressedSlat && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
