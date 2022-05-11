// ACCORDION
// -----------------------------------------------------------------------------

import readyComponent from "../../helpers/ready-component";
import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion(event) {
  const targetSlat = event.target.closest(SELECTOR_SLAT);

  if (targetSlat) toggleCollapsible(targetSlat);
}

readyComponent(document, "click", SELECTOR_ACCORDION, Accordion);

export default Accordion;
