// TABSET
// -----------------------------------------------------------------------------

import managePhasing from "../../helpers/manage-phasing";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const CLASS_ACTIVATED = "is-activated";
const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));

  function swapPanel(targetTab) {
    const activatedTab = tabs.find((tab) => tab.classList.contains(CLASS_ACTIVATED));
    const activatedPanelId = activatedTab.getAttribute(DATA_SHOW);
    const activatedPanel = document.querySelector(`#${activatedPanelId}`);
    const upcomingPanelId = targetTab.getAttribute(DATA_SHOW);
    const upcomingPanel = document.querySelector(`#${upcomingPanelId}`);
    const isPhasingIn = activatedPanel.classList.contains(CLASS_PHASING_IN);

    if (!isPhasingIn && activatedTab !== targetTab) {
      activatedTab.classList.remove(CLASS_ACTIVATED);
      activatedTab.setAttribute("tabIndex", "-1");
      activatedPanel.classList.remove(CLASS_PHASING_IN);
      activatedPanel.classList.remove(CLASS_SHOWN);
      targetTab.classList.add(CLASS_ACTIVATED);
      targetTab.removeAttribute("tabIndex");
      managePhasing(upcomingPanel);
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
