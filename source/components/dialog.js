// DIALOG
// -----------------------------------------------------------------------------

import trapFocus from "../helpers/trap-focus";
import managePhasing from "../helpers/manage-phasing";
import toggleScroll from "../helpers/toggle-scroll";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_HIDE = "[data-hide]";
const DATA_SHOW = "data-show";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);

  function show() {
    managePhasing(dialog, backdrop, wrapper);
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("keydown", handleTabKeydown);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    managePhasing(dialog, backdrop, wrapper);
    dialog.removeAttribute("tabindex");
    trigger.focus();
    toggleScroll();

    dialog.removeEventListener("keydown", handleTabKeydown);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscapeKeydown);
  }

  function handleHideClick(event) {
    const targetHide = event.target.closest(SELECTOR_HIDE);

    if (targetHide) {
      hide();
    }
  }

  function handleBackdropClick(event) {
    const targetBackdrop = event.target.matches(SELECTOR_BACKDROP);

    if (targetBackdrop) {
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

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
