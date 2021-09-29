// DIALOG
// -----------------------------------------------------------------------------

import toggleScroll from "../helpers/toggle-scroll";
import trapFocus from "../helpers/trap-focus";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const SELECTOR_HIDE = "[data-hide]";
const CLASS_ANIMATING = "is-animating";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);

  function show() {
    wrapper.classList.add(CLASS_SHOWN);
    dialog.classList.add(CLASS_ANIMATING);
    backdrop.classList.add(CLASS_ANIMATING);
    requestAnimationFrame(() => {
      dialog.classList.add(CLASS_SHOWN);
      backdrop.classList.add(CLASS_SHOWN);
    });
    backdrop.addEventListener(
      "transitionend",
      () => {
        dialog.classList.add(CLASS_ANIMATING);
        backdrop.classList.remove(CLASS_ANIMATING);
      },
      { once: true }
    );

    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("keydown", handleFocusTrap);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function hide() {
    dialog.classList.add(CLASS_ANIMATING);
    backdrop.classList.add(CLASS_ANIMATING);
    requestAnimationFrame(() => {
      dialog.classList.remove(CLASS_SHOWN);
      backdrop.classList.remove(CLASS_SHOWN);
    });
    backdrop.addEventListener(
      "transitionend",
      () => {
        backdrop.classList.remove(CLASS_ANIMATING);
        wrapper.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );

    toggleScroll();

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

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
