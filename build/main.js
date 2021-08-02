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

// source/components/accordion.js
var SELECTOR_ACCORDION = ".accordion";
var SELECTOR_SLAT = ".accordion-slat";
var CLASS_ACTIVATED = "is-activated";
var CLASS_SHOWN = "is-shown";
var DATA_TOGGLE = "data-toggle";
function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];
  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TOGGLE);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);
    if (!isShown) {
      slat.classList.add(CLASS_ACTIVATED);
      slat.setAttribute("aria-expanded", "true");
      panel.classList.add(CLASS_SHOWN);
    } else {
      slat.classList.remove(CLASS_ACTIVATED);
      slat.setAttribute("aria-expanded", "false");
    }
    requestAnimationFrame(() => {
      panel.style.height = !isShown ? 0 : panel.scrollHeight + "px";
      panel.style.overflowY = "hidden";
      requestAnimationFrame(() => {
        panel.style.height = !isShown ? panel.scrollHeight + "px" : 0;
      });
    });
    panel.addEventListener("transitionend", () => {
      panel.style.overflowY = "";
      if (isShown)
        panel.classList.remove(CLASS_SHOWN);
    }, {once: true});
  }
  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);
    if (targetSlat) {
      togglePanel(targetSlat);
    }
  }
  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);
    if (targetSlat && navigationKeys.includes(event.key)) {
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

// source/components/banner.js
var SELECTOR_BANNER = ".banner";
var SELECTOR_DISMISS = "[data-dismiss]";
function Banner(banner) {
  function handleDismissClick(event) {
    if (event.target.closest(SELECTOR_DISMISS)) {
      manage_transit_default(banner, "out").then(() => {
        banner.remove();
      });
    }
  }
  banner.addEventListener("click", handleDismissClick);
}
var banners = Array.from(document.querySelectorAll(SELECTOR_BANNER));
banners.forEach((banner) => Banner(banner));

// source/helpers/toggle-scroll.js
function toggleScroll() {
  if (window.innerHeight >= document.body.scrollHeight)
    return;
  const scrollPosition = window.scrollY || Math.abs(parseInt(document.body.style.top));
  if (document.body.style.overflowY === "") {
    document.body.style.position = "fixed";
    document.body.style.top = -scrollPosition + "px";
    document.body.style.overflowY = "scroll";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
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
var SELECTOR_WRAPPER = ".dialog-wrapper";
var SELECTOR_BACKDROP = ".dialog-backdrop";
var SELECTOR_HIDE = "[data-hide]";
var CLASS_SHOWN2 = "is-shown";
var DATA_SHOW = "data-show";
function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);
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
    if (event.target.closest(SELECTOR_HIDE)) {
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
var SELECTOR_WRAPPER2 = ".drawer-wrapper";
var SELECTOR_BACKDROP2 = ".drawer-backdrop";
var SELECTOR_HIDE2 = "[data-hide]";
var CLASS_SHOWN3 = "is-shown";
var DATA_SHOW2 = "data-show";
function Drawer(drawer) {
  const drawerId = drawer.id;
  const trigger = document.querySelector(`[${DATA_SHOW2}="${drawerId}"]`);
  const wrapper = drawer.closest(SELECTOR_WRAPPER2);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP2);
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
    if (event.target.closest(DATA_HIDE)) {
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
  function handleHide(event) {
    if (event.target.closest(SELECTOR_HIDE2)) {
      hide();
    }
  }
  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      trap_focus_default(event, drawer);
    }
  }
  trigger.addEventListener("click", show);
  drawer.addEventListener("click", handleHide);
}
var drawers = Array.from(document.querySelectorAll(SELECTOR_DRAWER));
drawers.forEach((drawer) => Drawer(drawer));

// source/components/menu.js
var SELECTOR_MENU = ".menu";
var SELECTOR_LINK = ".menu-link";
var CLASS_ACTIVATED2 = "is-activated";
var CLASS_SHOWN4 = "is-shown";
var DATA_TOGGLE2 = "data-toggle";
function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE2}="${menuId}"]`);
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
var SELECTOR_DISMISS2 = "[data-dismiss]";
function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_DISMISS2)) {
      manage_transit_default(notification, "out").then(() => {
        notification.remove();
      });
    }
  }
  notification.addEventListener("click", handleDismiss);
}
var notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));
notifications.forEach((notification) => Notification(notification));

// source/components/popover.js
var SELECTOR_POPOVER = ".popover";
var CLASS_ACTIVATED3 = "is-activated";
var CLASS_SHOWN5 = "is-shown";
var DATA_TOGGLE3 = "data-toggle";
function Popover(popover) {
  const popoverId = popover.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE3}="${popoverId}"]`);
  function toggle() {
    const isShown = popover.classList.contains(CLASS_SHOWN5);
    trigger.classList.toggle(CLASS_ACTIVATED3);
    trigger.setAttribute("aria-expanded", !isShown);
    if (!isShown) {
      popover.classList.add(CLASS_SHOWN5);
      manage_transit_default(popover, "in");
      position();
      window.addEventListener("resize", position);
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      popover.addEventListener("keydown", handleTab);
    } else {
      manage_transit_default(popover, "out").then(() => {
        popover.classList.remove(CLASS_SHOWN5);
      });
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      trigger.removeEventListener("keydown", handleTab);
      popover.removeEventListener("keydown", handleTab);
    }
  }
  function position() {
    popover.style.left = trigger.getBoundingClientRect().left + "px";
    popover.style.top = document.documentElement.scrollTop + trigger.getBoundingClientRect().bottom + "px";
  }
  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !popover.contains(event.target)) {
      toggle();
    }
  }
  function handleEscape(event) {
    if (event.key === "Escape") {
      toggle();
    }
  }
  function handleTab(event) {
    const focusableElements = Array.from(popover.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if (event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey || event.key === "Tab" && document.activeElement === trigger && event.shiftKey) {
      toggle();
    }
  }
  trigger.addEventListener("click", toggle);
}
var popovers = Array.from(document.querySelectorAll(SELECTOR_POPOVER));
popovers.forEach((popover) => Popover(popover));

// source/components/tabset.js
var SELECTOR_TABSET = ".tabset";
var SELECTOR_TAB = ".tabset-tab";
var SELECTOR_PANEL = ".tabset-panel";
var CLASS_ACTIVATED4 = "is-activated";
var CLASS_SHOWN6 = "is-shown";
var DATA_SHOW3 = "data-show";
function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));
  function showPanel(currentTab) {
    const panelId = currentTab.getAttribute(DATA_SHOW3);
    tabs.forEach((tab) => {
      if (tab === currentTab) {
        currentTab.classList.add(CLASS_ACTIVATED4);
        tab.removeAttribute("tabIndex");
      } else if (tab.classList.contains(CLASS_ACTIVATED4)) {
        tab.classList.remove(CLASS_ACTIVATED4);
        tab.setAttribute("tabIndex", "-1");
      }
    });
    panels.forEach((panel) => {
      if (panel.id === panelId) {
        panel.classList.add(CLASS_SHOWN6);
        manage_transit_default(panel, "in");
      } else {
        panel.classList.remove(CLASS_SHOWN6);
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
      move_focus_default(event.key, tabs);
    }
  }
  tabset.addEventListener("click", handleTabClick);
  tabset.addEventListener("keydown", handleTabKeydown);
}
var tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));
tabsets.forEach((tabset) => Tabset(tabset));
