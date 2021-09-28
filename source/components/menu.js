// MENU
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";

const SELECTOR_MENU = ".menu";
const SELECTOR_LINK = ".menu-link";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TOGGLE = "data-toggle";

function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE}="${menuId}"]`);
  const links = Array.from(menu.querySelectorAll(SELECTOR_LINK));

  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);

    if (!isShown) {
      menu.classList.add(CLASS_SHOWN);

      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleTab);
      menu.addEventListener("keydown", handleLinkKeydown);
    } else {
      menu.classList.remove(CLASS_SHOWN);

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
    if ((event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      toggle();
    }
  }

  function handleLinkKeydown(event) {
    if (event.target.closest(SELECTOR_LINK) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, links);
    }
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
