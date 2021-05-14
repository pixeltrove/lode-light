// TABSET
// -----------------------------------------------------------------------------

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));

  function activateTab(currentTab) {
    const panelId = currentTab.getAttribute(DATA_TARGET);

    tabs.forEach((tab) => {
      if (tab === currentTab) {
        currentTab.classList.add(CLASS_ACTIVATED);
        tab.removeAttribute("tabIndex");
      } else if (tab.classList.contains(CLASS_ACTIVATED)) {
        tab.classList.remove(CLASS_ACTIVATED);
        tab.setAttribute("tabIndex", "-1");
      }
    });

    panels.forEach((panel) => {
      if (panel.id === panelId) {
        panel.classList.add(CLASS_SHOWN);
      } else {
        panel.classList.remove(CLASS_SHOWN);
      }
    });
  }

  function moveFocus(key) {
    const currentIndex = tabs.indexOf(document.activeElement);
    const lastIndex = tabs.length - 1;
    let upcomingIndex = 0;

    switch (key) {
      case "ArrowLeft":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowRight":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    tabs[upcomingIndex].focus();
  }

  function handleTabClick(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      activateTab(event.target.closest(SELECTOR_TAB));
    }
  }

  function handleTabKeydown(event) {
    if (event.target.closest(SELECTOR_TAB) && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key);
    }
  }

  tabset.addEventListener("click", handleTabClick);
  tabset.addEventListener("keydown", handleTabKeydown);
}

const tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));

tabsets.forEach((tabset) => Tabset(tabset));
