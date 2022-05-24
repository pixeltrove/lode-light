// ACCORDION
// -----------------------------------------------------------------------------

import transitionExpandable from "../../helpers/transition-expandable";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(accordion) {
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      transitionExpandable(targetSlat);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
}

export { Accordion, SELECTOR_ACCORDION };
