// TABSET
// -----------------------------------------------------------------------------

import focusKeyable from "../helpers/focus-keyable";
import managePhasing from "../helpers/manage-phasing";

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));

  function showPanel(pressedTab) {
    const panelId = pressedTab.getAttribute(DATA_SHOW);

    tabs.forEach((tab) => {
      if (tab === pressedTab) {
        pressedTab.classList.add(CLASS_ACTIVATED);
        tab.removeAttribute("tabIndex");
      } else if (tab.classList.contains(CLASS_ACTIVATED)) {
        tab.classList.remove(CLASS_ACTIVATED);
        tab.setAttribute("tabIndex", "-1");
      }
    });

    panels.forEach((panel) => {
      if (panel.id === panelId && !panel.classList.contains(CLASS_SHOWN)) {
        managePhasing(panel);
      } else if (panel.id !== panelId) {
        panel.classList.remove(CLASS_SHOWN);
      }
    });
  }

  function handleTabClick(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      showPanel(event.target.closest(SELECTOR_TAB));
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
