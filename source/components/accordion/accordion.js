// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion() {
  function initialize(accordion) {
    accordion.addEventListener("click", handleSlatClick);
  }

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      toggleCollapsible(targetSlat);
    }
  }

  return { initialize };
}

const elements = document.querySelectorAll(SELECTOR_ACCORDION);

elements.forEach((element) => {
  const accordion = Accordion();
  accordion.initialize(element);
});
