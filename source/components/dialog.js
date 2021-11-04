// DIALOG
// -----------------------------------------------------------------------------

import togglePoppable from "../helpers/toggle-poppable";
import lockScroll from "../helpers/lock-scroll";
import trapFocus from "../helpers/trap-focus";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const SELECTOR_HIDE = "[data-hide]";
const DATA_POP = "data-pop";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_POP}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);

  function show() {
    togglePoppable(dialog, backdrop, wrapper);

    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    lockScroll();

    dialog.addEventListener("keydown", handleFocusTrap);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function hide() {
    togglePoppable(dialog, backdrop, wrapper);
    lockScroll();

    dialog.removeEventListener("keydown", handleFocusTrap);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
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

  function handleEscape(event) {
    if (event.key === "Escape") {
      hide();
    }
  }

  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      trapFocus(event, dialog);
    }
  }

  trigger.addEventListener("click", show);
}

Array.from(document.querySelectorAll(SELECTOR_DIALOG)).forEach((dialog) => Dialog(dialog));
