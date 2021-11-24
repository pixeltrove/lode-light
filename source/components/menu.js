// MENU
// -----------------------------------------------------------------------------

import focusKeyable from "../helpers/focus-keyable";
import managePhasing from "../helpers/manage-phasing";

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

    isShown ? hide() : show();
  }

  function show() {
    managePhasing(menu);

    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    trigger.addEventListener("keydown", handleTab);
    menu.addEventListener("keydown", handleTab);
    menu.addEventListener("keydown", handleLinkKeydown);
  }

  function hide() {
    managePhasing(menu);

    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);

    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleEscape);
    trigger.removeEventListener("keydown", handleTab);
    menu.removeEventListener("keydown", handleTab);
    menu.removeEventListener("keydown", handleLinkKeydown);
  }

  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      hide();
    }
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  function handleTab(event) {
    const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if ((event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      hide();
    }
  }

  function handleLinkKeydown(event) {
    if (event.target.closest(SELECTOR_LINK) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      focusKeyable(event.key, links);
    }
  }

  trigger.addEventListener("click", toggle);
}

Array.from(document.querySelectorAll(SELECTOR_MENU)).forEach((menu) => Menu(menu));
