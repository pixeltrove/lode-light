// DIALOG
// -----------------------------------------------------------------------------

import initializeComponent from "../../helpers/initialize-component";
import transitionDisplay from "../../helpers/transition-display";
import toggleScroll from "../../helpers/toggle-scroll";
import trapFocus from "../../helpers/trap-focus";

const SELECTOR_SCRIM = ".dialog-scrim";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_SHOW = "[data-show-dialog]";
const SELECTOR_HIDE = "[data-hide-dialog]";

function Dialog(event) {
  const trigger = event.target;
  const target = trigger.getAttribute("data-show-dialog");
  const dialog = document.querySelector(`#${target}`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const scrim = wrapper.querySelector(SELECTOR_SCRIM);

  function show() {
    transitionDisplay(dialog, "fade-regular", "enter");
    transitionDisplay(scrim, "fade-regular", "enter");
    transitionDisplay(wrapper, "fade-regular", "enter");
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("click", handleHideClick);
    dialog.addEventListener("keydown", handleTabKeydown);
    scrim.addEventListener("click", handleScrimClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    transitionDisplay(dialog, "fade-regular", "leave");
    transitionDisplay(scrim, "fade-regular", "leave");
    transitionDisplay(wrapper, "fade-regular", "leave");
    dialog.removeAttribute("tabindex");
    trigger.focus();
    toggleScroll();

    dialog.removeEventListener("click", handleHideClick);
    dialog.removeEventListener("keydown", handleTabKeydown);
    scrim.removeEventListener("click", handleScrimClick);
    document.removeEventListener("keydown", handleEscapeKeydown);
  }

  function handleHideClick(event) {
    const targetHide = event.target.closest(SELECTOR_HIDE);

    if (targetHide) {
      hide();
    }
  }

  function handleScrimClick(event) {
    const targetScrim = event.target.matches(SELECTOR_SCRIM);

    if (targetScrim) {
      hide();
    }
  }

  function handleEscapeKeydown(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  function handleTabKeydown(event) {
    if (event.key === "Tab") {
      trapFocus(dialog, event);
    }
  }

  show();
}

initializeComponent(SELECTOR_SHOW, Dialog);

export default Dialog;
