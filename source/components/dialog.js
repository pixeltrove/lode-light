// DIALOG
// -----------------------------------------------------------------------------

import focusInside from "../helpers/focus-inside";
import managePhasing from "../helpers/manage-phasing";
import toggleScroll from "../helpers/toggle-scroll";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const SELECTOR_HIDE = "[data-hide]";
const DATA_SHOW = "data-show";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);

  function show() {
    managePhasing(dialog, backdrop, wrapper);
    toggleScroll();

    dialog.setAttribute("tabindex", -1);
    dialog.focus();

    dialog.addEventListener("keydown", handleTabKeydown);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    managePhasing(dialog, backdrop, wrapper);
    toggleScroll();

    trigger.focus();

    dialog.removeEventListener("keydown", handleTabKeydown);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscapeKeydown);
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

  function handleEscapeKeydown(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  function handleTabKeydown(event) {
    if (event.key === "Tab") {
      focusInside(event, dialog);
    }
  }

  trigger.addEventListener("click", show);
}

Array.from(document.querySelectorAll(SELECTOR_DIALOG)).forEach((dialog) => Dialog(dialog));
