// DIALOG
// -----------------------------------------------------------------------------

import managePhasing from "../helpers/manage-phasing";
import toggleScroll from "../helpers/toggle-scroll";
import trapFocus from "../helpers/trap-focus";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_SCRIM = ".dialog-scrim";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_HIDE = "[data-hide]";
const DATA_SHOW = "data-show";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const scrim = wrapper.querySelector(SELECTOR_SCRIM);

  function show() {
    managePhasing(dialog, scrim, wrapper);
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("click", handleHideClick);
    dialog.addEventListener("keydown", handleTabKeydown);
    scrim.addEventListener("click", handleScrimClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    managePhasing(dialog, scrim, wrapper);
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
      trapFocus(event, dialog);
    }
  }

  trigger.addEventListener("click", show);
}

Array.from(document.querySelectorAll(SELECTOR_DIALOG)).forEach((dialog) => Dialog(dialog));

export default Dialog;
