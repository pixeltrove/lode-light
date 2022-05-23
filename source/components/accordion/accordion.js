// ACCORDION
// -----------------------------------------------------------------------------

import toggleExpandable from "../../helpers/toggle-expandable";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      toggleExpandable(targetSlat);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
}

export { Accordion, SELECTOR_ACCORDION };
