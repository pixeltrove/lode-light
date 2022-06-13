// TABSET
// -----------------------------------------------------------------------------

import { enter } from "../../helpers/transition-display";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const CLASS_ACTIVATED = "activated";
const CLASS_SHOWN = "shown";
const DATA_SHOW = "data-show";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));

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
      enter(upcomingPanel, "fade");
    }
  }

  function handleTabClick(event) {
    const targetTab = event.target.closest(SELECTOR_TAB);

    if (targetTab) {
      swapPanel(targetTab);
    }
  }

  tabset.addEventListener("click", handleTabClick);
}

export { Tabset, SELECTOR_TABSET };
