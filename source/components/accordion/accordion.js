// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../../helpers/toggle-collapsible";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";

function Accordion() {
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      toggleCollapsible(targetSlat);
    }
  }

  return handleSlatClick;
}

document.addEventListener("click", (event) => {
  if (event.target.closest(SELECTOR_ACCORDION)) {
    let initializer = Accordion();
    initializer(event);
  }
});

export default Accordion;
