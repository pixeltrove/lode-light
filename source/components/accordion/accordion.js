// ACCORDION
// -----------------------------------------------------------------------------

import { enter, leave } from "../../helpers/transition-display";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "activated";
const DATA_EXPANDABLE = "data-expandable";

function Accordion(accordion) {
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);
    const panelId = targetSlat.getAttribute(DATA_EXPANDABLE);
    const panel = document.getElementById(panelId);
    const isExpanded = targetSlat.getAttribute("aria-expanded") === "true";

    if (targetSlat) {
      targetSlat.classList.toggle(CLASS_ACTIVATED);
      targetSlat.setAttribute("aria-expanded", isExpanded ? "false" : "true");

      isExpanded ? enter(panel, "expand") : leave(panel, "expand");
    }
  }

  accordion.addEventListener("click", handleSlatClick);
}

export { Accordion, SELECTOR_ACCORDION };
