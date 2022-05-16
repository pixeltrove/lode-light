// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function initializeAccordion(accordion) {
  accordion.addEventListener("click", handleSlatClick);
}

function handleSlatClick(event) {
  const targetSlat = event.target.closest(SELECTOR_SLAT);

  if (targetSlat) toggleCollapsible(targetSlat);
}

const accordions = document.querySelectorAll(SELECTOR_ACCORDION);

accordions.forEach((accordion) => initializeAccordion(accordion));
