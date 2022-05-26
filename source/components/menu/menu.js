// MENU
// -----------------------------------------------------------------------------

import transitionDisplay from "../../helpers/transition-display";

const SELECTOR_MENU = ".menu";
const CLASS_ACTIVATED = "activated";
const CLASS_SHOWN = "shown";
const DATA_TOGGLE = "data-toggle";

function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE}="${menuId}"]`);
  const focusableElements = Array.from(menu.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])"));
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    isShown ? hide() : show();
  }

  function show() {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    transitionDisplay(menu, "slide", "regular");

    trigger.addEventListener("keydown", handleTabKeydown);
    menu.addEventListener("keydown", handleTabKeydown);
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    transitionDisplay(menu, "slide", "regular");

    trigger.removeEventListener("keydown", handleTabKeydown);
    menu.removeEventListener("keydown", handleTabKeydown);
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleEscapeKeydown);
  }

  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      hide();
    }
  }

  function handleEscapeKeydown(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  function handleTabKeydown(event) {
    if (event.key === "Tab" && ((event.shiftKey && document.activeElement === trigger) || (!event.shiftKey && document.activeElement === lastFocusableElement))) {
      hide();
    }
  }

  trigger.addEventListener("click", toggle);
}

export { Menu, SELECTOR_MENU };
