// TABSET
// -----------------------------------------------------------------------------

import readyComponent from "../../helpers/ready-component";
import transitionDisplay from "../../helpers/transition-display";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Tabset(event) {
  const tabset = event.target.closest(SELECTOR_TABSET);
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const targetTab = event.target.closest(SELECTOR_TAB);

  function swapPanel(targetTab) {
    const activatedTab = tabs.find((tab) => tab.classList.contains(CLASS_ACTIVATED));
    const activatedPanelId = activatedTab.getAttribute(DATA_SHOW);
    const activatedPanel = document.querySelector(`#${activatedPanelId}`);
    const upcomingPanelId = targetTab.getAttribute(DATA_SHOW);
    const upcomingPanel = document.querySelector(`#${upcomingPanelId}`);

    if (activatedTab !== targetTab) {
      activatedTab.classList.remove(CLASS_ACTIVATED);
      activatedTab.setAttribute("tabIndex", "-1");
      activatedPanel.classList.remove(CLASS_SHOWN);
      targetTab.classList.add(CLASS_ACTIVATED);
      targetTab.removeAttribute("tabIndex");
      transitionDisplay(upcomingPanel, "fade-regular", "enter");
    }
  }

  swapPanel(targetTab);
}

readyComponent(document, "click", SELECTOR_TABSET, Tabset);

export default Tabset;
