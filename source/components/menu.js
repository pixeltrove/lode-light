// MENU
// -----------------------------------------------------------------------------

const SELECTOR_MENU = ".menu";
const SELECTOR_LINK = ".menu-link";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${menuId}"]`);
  const links = Array.from(menu.querySelectorAll(SELECTOR_LINK));

  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);
    menu.classList.toggle(CLASS_SHOWN);

    if (!isShown) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleLinkKeydown);
    } else {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      trigger.removeEventListener("keydown", handleTab);
      menu.removeEventListener("keydown", handleTab);
      menu.removeEventListener("keydown", handleLinkKeydown);
    }
  }

  function moveFocus(key) {
    const currentIndex = links.indexOf(document.activeElement);
    const lastIndex = links.length - 1;
    let upcomingIndex;

    switch (key) {
      case "ArrowUp":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowDown":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    links[upcomingIndex].focus();
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
    if ((event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      toggle();
    }
  }

  function handleLinkKeydown(event) {
    if (event.target.closest(SELECTOR_LINK) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key);
    }
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
