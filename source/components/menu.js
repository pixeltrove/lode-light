// MENU
// -----------------------------------------------------------------------------

import managePhasing from "../helpers/manage-phasing";
import moveFocus from "../helpers/move-focus";

const SELECTOR_MENU = ".menu";
const SELECTOR_ACTION = ".menu-action";
const CLASS_ACTIVATED = "is-activated";
const CLASS_PHASING_IN = "is-phasing-in";
const CLASS_PHASING_OUT = "is-phasing-out";
const CLASS_SHOWN = "is-shown";
const DATA_TOGGLE = "data-toggle";

function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE}="${menuId}"]`);
  const actions = Array.from(menu.querySelectorAll(SELECTOR_ACTION));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];
  const focusableElements = Array.from(menu.querySelectorAll(":where(a[href], button:not([disabled]), input:not([disabled])):not([tabindex^='-'])"));
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  function toggle() {
    const isPhasing = menu.classList.contains(CLASS_PHASING_IN) || menu.classList.contains(CLASS_PHASING_OUT);
    const isShown = menu.classList.contains(CLASS_SHOWN);

    if (!isPhasing) {
      isShown ? hide() : show();
    }
  }

  function show() {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    managePhasing(menu);

    trigger.addEventListener("keydown", handleTabKeydown);
    menu.addEventListener("keydown", handleTabKeydown);
    menu.addEventListener("keydown", handleActionKeydown);
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    managePhasing(menu);

    trigger.removeEventListener("keydown", handleTabKeydown);
    menu.removeEventListener("keydown", handleTabKeydown);
    menu.removeEventListener("keydown", handleActionKeydown);
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleEscapeKeydown);
  }

  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      hide();
    }
  }

  function handleTabKeydown(event) {
    if (event.key === "Tab" && ((event.shiftKey && document.activeElement === trigger) || document.activeElement === lastFocusableElement)) {
      hide();
    }
  }

  function handleActionKeydown(event) {
    const targetAction = event.target.closest(SELECTOR_ACTION);

    if (targetAction && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, actions);
    }
  }

  function handleEscapeKeydown(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
