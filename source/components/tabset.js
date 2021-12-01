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

  function swapPanel(pressedTab) {
    const panelId = pressedTab.getAttribute(DATA_SHOW);
    const targetPanel = document.querySelector(`#${panelId}`);

    tabs.forEach((tab) => {
      tab.classList.remove(CLASS_ACTIVATED);
      tab.setAttribute("tabIndex", "-1");
    });

    panels.forEach((panel) => {
      panel.classList.remove(CLASS_SHOWN);
    });

    pressedTab.classList.add(CLASS_ACTIVATED);
    pressedTab.removeAttribute("tabIndex");
    managePhasing(targetPanel);
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
