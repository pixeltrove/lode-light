// TABSET
// -----------------------------------------------------------------------------

import focusKeyable from "../helpers/focus-keyable";
import managePhasing from "../helpers/manage-phasing";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));
  const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];

  function swapPanel(pressedTab) {
    const currentTab = tabs.filter((tab) => tab.classList.contains(CLASS_ACTIVATED))[0];
    const currentPanel = panels.filter((panel) => panel.classList.contains(CLASS_SHOWN))[0];
    const upcomingPanelId = pressedTab.getAttribute(DATA_SHOW);
    const upcomingPanel = document.querySelector(`#${upcomingPanelId}`);
    const isPhasing = panels.filter((panel) => panel.classList.contains(CLASS_PHASING_IN))[0];

    if (!isPhasing) {
      currentTab.classList.remove(CLASS_ACTIVATED);
      currentTab.setAttribute("tabIndex", "-1");
      currentPanel.classList.remove(CLASS_PHASING_IN);
      currentPanel.classList.remove(CLASS_SHOWN);
      pressedTab.classList.add(CLASS_ACTIVATED);
      pressedTab.removeAttribute("tabIndex");
      managePhasing(upcomingPanel);
    }
  }

  function handleTabClick(event) {
    const pressedTab = event.target.closest(SELECTOR_TAB);

    if (pressedTab) {
      swapPanel(pressedTab);
    }
  }

  function handleTabKeydown(event) {
    const pressedTab = event.target.closest(SELECTOR_TAB);

    if (pressedTab && navigationKeys.includes(event.key)) {
      event.preventDefault();
      focusKeyable(event.key, tabs);
    }
  }

  tabset.addEventListener("click", handleTabClick);
  tabset.addEventListener("keydown", handleTabKeydown);
}

Array.from(document.querySelectorAll(SELECTOR_TABSET)).forEach((tabset) => Tabset(tabset));
