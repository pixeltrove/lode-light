// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../../helpers/toggle-collapsible";

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

export default Accordion;
