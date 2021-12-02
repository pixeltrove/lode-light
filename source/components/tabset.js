// TABSET
// -----------------------------------------------------------------------------

import focusKeyable from "../helpers/focus-keyable";
import managePhasing from "../helpers/manage-phasing";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const CLASS_ACTIVATED = "is-activated";
const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));

  function swapPanel(pressedTab) {
    const upcomingPanelId = pressedTab.getAttribute(DATA_SHOW);
    const upcomingPanel = document.querySelector(`#${upcomingPanelId}`);

    if (!pressedTab.classList.contains(CLASS_ACTIVATED)) {
      tabs.forEach((tab) => {
        if (tab.classList.contains(CLASS_ACTIVATED)) {
          const currentPanelId = tab.getAttribute(DATA_SHOW);
          const currentPanel = document.querySelector(`#${currentPanelId}`);

          tab.classList.remove(CLASS_ACTIVATED);
          tab.setAttribute("tabIndex", "-1");
          currentPanel.classList.remove(CLASS_PHASING_IN);
          currentPanel.classList.remove(CLASS_SHOWN);
        }
      });

      pressedTab.classList.add(CLASS_ACTIVATED);
      pressedTab.removeAttribute("tabIndex");
      managePhasing(upcomingPanel);
    }
  }

  function handleTabClick(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      swapPanel(event.target.closest(SELECTOR_TAB));
    }
  }

  function handleTabKeydown(event) {
    if (event.target.closest(SELECTOR_TAB) && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      focusKeyable(event.key, tabs);
    }
  }

  tabset.addEventListener("click", handleTabClick);
  tabset.addEventListener("keydown", handleTabKeydown);
}

Array.from(document.querySelectorAll(SELECTOR_TABSET)).forEach((tabset) => Tabset(tabset));
