// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      toggleCollapsible(targetSlat);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
}

Array.from(document.querySelectorAll(SELECTOR_ACCORDION)).forEach((accordion) => Accordion(accordion));

export default Accordion;
