// MENU
// -----------------------------------------------------------------------------

import initializeComponent from "../../helpers/initialize-component";
import transitionDisplay from "../../helpers/transition-display";

const SELECTOR_TRIGGER = "[data-menu]";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";

const CONFIG_MENU = {
  eventType: "click",
  componentSelector: false,
  triggerSelector: SELECTOR_TRIGGER,
  componentDefinition: Menu,
};

function Menu(event) {
  const trigger = event.target;
  const target = trigger.getAttribute("data-menu");
  const menu = document.querySelector(`#${target}`);
  const focusableElements = Array.from(menu.querySelectorAll(":where(a[href], button, input):not([tabindex^='-'], [disabled])"));
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    isShown ? hide() : show();
  }

  function show() {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    transitionDisplay(menu, "slide-regular", "enter");

    trigger.addEventListener("keydown", handleTabKeydown);
    menu.addEventListener("keydown", handleTabKeydown);
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    transitionDisplay(menu, "slide-regular", "leave");

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

  toggle();
}

initializeComponent(CONFIG_MENU);

export default Menu;
