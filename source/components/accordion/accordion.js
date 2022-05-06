// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(event) {
  const targetSlat = event.target.closest(SELECTOR_SLAT);

  if (targetSlat) toggleCollapsible(targetSlat);
}

document.addEventListener("click", (event) => {
  if (event.target.closest(SELECTOR_ACCORDION)) Accordion(event);
});

export default Accordion;
