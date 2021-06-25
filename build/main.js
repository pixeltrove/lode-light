// source/helpers/move-focus.js
function moveFocus(key, elements) {
  const currentIndex = elements.indexOf(document.activeElement);
  const lastIndex = elements.length - 1;
  let upcomingIndex;
  switch (key) {
    case "ArrowUp":
    case "ArrowLeft":
      upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      break;
    case "ArrowDown":
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
  elements[upcomingIndex].focus();
}
var move_focus_default = moveFocus;

// source/helpers/toggle-collapsible.js
var CLASS_ACTIVATED = "is-activated";
var CLASS_SHOWN = "is-shown";
var CLASS_TOGGLING = "is-toggling";
var DATA_TARGET = "data-target";
function toggleCollapsible(trigger) {
  const collapsibleId = trigger.getAttribute(DATA_TARGET);
  const collapsible = document.querySelector(`#${collapsibleId}`);
  const isShown = collapsible.classList.contains(CLASS_SHOWN);
  trigger.classList.toggle(CLASS_ACTIVATED);
  trigger.setAttribute("aria-expanded", !isShown);
  collapsible.style.height = !isShown ? 0 : collapsible.scrollHeight + "px";
  if (!isShown)
    collapsible.classList.add(CLASS_SHOWN);
  collapsible.classList.add(CLASS_TOGGLING);
  requestAnimationFrame(() => {
    collapsible.style.height = !isShown ? collapsible.scrollHeight + "px" : 0;
  });
  collapsible.addEventListener("transitionend", () => {
    collapsible.classList.remove(CLASS_TOGGLING);
    if (isShown)
      collapsible.classList.remove(CLASS_SHOWN);
  }, {once: true});
}
var toggle_collapsible_default = toggleCollapsible;

// source/components/accordion.js
var SELECTOR_ACCORDION = ".accordion";
var SELECTOR_SLAT = ".accordion-slat";
function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  function handleSlatClick(event) {
    if (event.target.closest(SELECTOR_SLAT)) {
      toggle_collapsible_default(event.target.closest(SELECTOR_SLAT));
    }
  }
  function handleSlatKeydown(event) {
    if (event.target.closest(SELECTOR_SLAT) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      move_focus_default(event.key, slats);
    }
  }
  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}
var accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));
accordions.forEach((accordion) => Accordion(accordion));

// source/helpers/manage-transit.js
function manageTransit(element, phase) {
  const phaseClass = `is-transiting-${phase}`;
  element.classList.add(phaseClass);
  return new Promise((resolve) => {
    element.addEventListener("animationend", () => {
      element.classList.remove(phaseClass);
      resolve(element);
    }, {once: true});
  });
}
var manage_transit_default = manageTransit;

// source/helpers/toggle-scroll.js
var CLASS_NO_SCROLL = "no-scroll";
function toggleScroll() {
  if (window.innerHeight >= document.body.scrollHeight)
    return;
  const scrollPosition = window.scrollY || Math.abs(parseInt(document.body.style.top));
  if (!document.body.classList.contains(CLASS_NO_SCROLL)) {
    document.body.classList.add(CLASS_NO_SCROLL);
    document.body.style.top = -scrollPosition + "px";
  } else {
    document.body.classList.remove(CLASS_NO_SCROLL);
    document.body.style.top = "";
    window.scroll(0, scrollPosition);
  }
}
var toggle_scroll_default = toggleScroll;

// source/helpers/trap-focus.js
function trapFocus(event, element) {
  const focusableElements = Array.from(element.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]"));
  const lastIndex = focusableElements.length - 1;
  const focusIndex = focusableElements.indexOf(document.activeElement);
  if (event.shiftKey && focusIndex === 0 || event.shiftKey && document.activeElement === element) {
    event.preventDefault();
    focusableElements[lastIndex].focus();
  } else if (!event.shiftKey && focusIndex === lastIndex) {
    event.preventDefault();
    focusableElements[0].focus();
  }
}
var trap_focus_default = trapFocus;

// source/components/dialog.js
var SELECTOR_DIALOG = ".dialog";
var SELECTOR_BACKDROP = ".dialog-backdrop";
var CLASS_SHOWN2 = "is-shown";
var DATA_HIDE = "data-hide";
var DATA_TARGET2 = "data-target";
function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET2}="${dialogId}"]`);
  const wrapper = dialog.parentElement;
  const backdrop = dialog.nextElementSibling;
  function show() {
    wrapper.classList.add(CLASS_SHOWN2);
    dialog.classList.add(CLASS_SHOWN2);
    backdrop.classList.add(CLASS_SHOWN2);
    manage_transit_default(dialog, "in");
    manage_transit_default(backdrop, "in");
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggle_scroll_default();
    dialog.addEventListener("keydown", handleFocusTrap);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }
  function hide() {
    Promise.all([manage_transit_default(dialog, "out"), manage_transit_default(backdrop, "out")]).then((elements) => {
      elements.forEach((element) => {
        element.classList.remove(CLASS_SHOWN2);
      });
      wrapper.classList.remove(CLASS_SHOWN2);
    });
    toggle_scroll_default();
    dialog.removeEventListener("keydown", handleFocusTrap);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }
  function handleHideClick(event) {
    if (event.target.hasAttribute(DATA_HIDE)) {
      hide();
    }
  }
  function handleBackdropClick(event) {
    if (event.target.matches(SELECTOR_BACKDROP)) {
      hide();
    }
  }
  function handleEscape(event) {
    if (event.key === "Escape") {
      hide();
    }
  }
  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      trap_focus_default(event, dialog);
    }
  }
  trigger.addEventListener("click", show);
}
var dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));
dialogs.forEach((dialog) => Dialog(dialog));

// source/components/drawer.js
var SELECTOR_DRAWER = ".drawer";
var SELECTOR_BACKDROP2 = ".drawer-backdrop";
var SELECTOR_BUTTON_DISMISS = ".drawer-button-dismiss";
var CLASS_SHOWN3 = "is-shown";
var DATA_HIDE2 = "data-hide";
var DATA_TARGET3 = "data-target";
function Drawer(drawer) {
  const drawerId = drawer.id;
  const trigger = document.querySelector(`[${DATA_TARGET3}="${drawerId}"]`);
  const wrapper = drawer.parentElement;
  const backdrop = drawer.nextElementSibling;
  function show() {
    wrapper.classList.add(CLASS_SHOWN3);
    drawer.classList.add(CLASS_SHOWN3);
    backdrop.classList.add(CLASS_SHOWN3);
    manage_transit_default(drawer, "in");
    manage_transit_default(backdrop, "in");
    drawer.setAttribute("tabindex", -1);
    drawer.focus();
    toggle_scroll_default();
    drawer.addEventListener("keydown", handleFocusTrap);
    drawer.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }
  function hide() {
    Promise.all([manage_transit_default(drawer, "out"), manage_transit_default(backdrop, "out")]).then((elements) => {
      elements.forEach((element) => {
        element.classList.remove(CLASS_SHOWN3);
      });
      wrapper.classList.remove(CLASS_SHOWN3);
    });
    toggle_scroll_default();
    drawer.removeEventListener("keydown", handleFocusTrap);
    drawer.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }
  function handleHideClick(event) {
    if (event.target.hasAttribute(DATA_HIDE2)) {
      hide();
    }
  }
  function handleBackdropClick(event) {
    if (event.target.matches(SELECTOR_BACKDROP2)) {
      hide();
    }
  }
  function handleEscape(event) {
    if (event.key === "Escape") {
      hide();
    }
  }
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      hide();
    }
  }
  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      trap_focus_default(event, drawer);
    }
  }
  trigger.addEventListener("click", show);
  drawer.addEventListener("click", handleDismiss);
}
var drawers = Array.from(document.querySelectorAll(SELECTOR_DRAWER));
drawers.forEach((drawer) => Drawer(drawer));

// source/components/menu.js
var SELECTOR_MENU = ".menu";
var SELECTOR_LINK = ".menu-link";
var CLASS_ACTIVATED2 = "is-activated";
var CLASS_SHOWN4 = "is-shown";
var DATA_TARGET4 = "data-target";
function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET4}="${menuId}"]`);
  const links = Array.from(menu.querySelectorAll(SELECTOR_LINK));
  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN4);
    trigger.classList.toggle(CLASS_ACTIVATED2);
    trigger.setAttribute("aria-expanded", !isShown);
    if (!isShown) {
      menu.classList.add(CLASS_SHOWN4);
      manage_transit_default(menu, "in");
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleLinkKeydown);
    } else {
      manage_transit_default(menu, "out").then(() => {
        menu.classList.remove(CLASS_SHOWN4);
      });
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      trigger.removeEventListener("keydown", handleTab);
      menu.removeEventListener("keydown", handleTab);
      menu.removeEventListener("keydown", handleLinkKeydown);
    }
  }
  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      toggle();
    }
  }
  function handleEscape(event) {
    if (event.key === "Escape") {
      toggle();
    }
  }
  function handleTab(event) {
    const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if (event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey || event.key === "Tab" && document.activeElement === trigger && event.shiftKey) {
      toggle();
    }
  }
  function handleLinkKeydown(event) {
    if (event.target.closest(SELECTOR_LINK) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      move_focus_default(event.key, links);
    }
  }
  trigger.addEventListener("click", toggle);
}
var menus = Array.from(document.querySelectorAll(SELECTOR_MENU));
menus.forEach((menu) => Menu(menu));

// source/components/notification.js
var SELECTOR_NOTIFICATION = ".notification";
var SELECTOR_BUTTON_DISMISS2 = ".notification-button-dismiss";
function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS2)) {
      manage_transit_default(notification, "out").then(() => {
        notification.remove();
      });
    }
  }
  notification.addEventListener("click", handleDismiss);
}
var notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));
notifications.forEach((notification) => Notification(notification));

// source/components/tabset.js
var SELECTOR_TABSET = ".tabset";
var SELECTOR_TAB = ".tabset-tab";
var SELECTOR_PANEL = ".tabset-panel";
var CLASS_ACTIVATED3 = "is-activated";
var CLASS_SHOWN5 = "is-shown";
var DATA_TARGET5 = "data-target";
function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));
  function activateTab(currentTab) {
    const panelId = currentTab.getAttribute(DATA_TARGET5);
    tabs.forEach((tab) => {
      if (tab === currentTab) {
        currentTab.classList.add(CLASS_ACTIVATED3);
        tab.removeAttribute("tabIndex");
      } else if (tab.classList.contains(CLASS_ACTIVATED3)) {
        tab.classList.remove(CLASS_ACTIVATED3);
        tab.setAttribute("tabIndex", "-1");
      }
    });
    panels.forEach((panel) => {
      if (panel.id === panelId) {
        panel.classList.add(CLASS_SHOWN5);
        manage_transit_default(panel, "in");
      } else {
        panel.classList.remove(CLASS_SHOWN5);
      }
    });
  }
  function handleTabClick(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      activateTab(event.target.closest(SELECTOR_TAB));
    }
  }
  function handleTabKeydown(event) {
    if (event.target.closest(SELECTOR_TAB) && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      move_focus_default(event.key, tabs);
    }
  }
  tabset.addEventListener("click", handleTabClick);
  tabset.addEventListener("keydown", handleTabKeydown);
}
var tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));
tabsets.forEach((tabset) => Tabset(tabset));
