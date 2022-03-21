// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";
import toggleCollapsible from "../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      toggleCollapsible(targetSlat);
    }
  }

  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(slats, event.key);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

Array.from(document.querySelectorAll(SELECTOR_ACCORDION)).forEach((accordion) => Accordion(accordion));

export default Accordion;
