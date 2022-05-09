// ACCORDION
// -----------------------------------------------------------------------------

import initializeComponent from "../../helpers/initialize-component";
import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

const CONFIG_ACCORDION = {
  eventType: "click",
  componentSelector: SELECTOR_ACCORDION,
  triggerSelector: false,
  componentDefinition: Accordion,
};

function Accordion(event) {
  const targetSlat = event.target.closest(SELECTOR_SLAT);

  if (targetSlat) toggleCollapsible(targetSlat);
}

initializeComponent(CONFIG_ACCORDION);

export default Accordion;
