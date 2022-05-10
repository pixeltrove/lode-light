// ACCORDION
// -----------------------------------------------------------------------------

import initializeComponent from "../../helpers/initialize-component";
import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const EVENT_TYPE = "click";

function Accordion(event) {
  const targetSlat = event.target.closest(SELECTOR_SLAT);

  if (targetSlat) toggleCollapsible(targetSlat);
}

initializeComponent(EVENT_TYPE, SELECTOR_ACCORDION, Accordion);

export default Accordion;
