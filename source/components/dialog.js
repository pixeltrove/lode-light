// DIALOG
// -----------------------------------------------------------------------------

import manageTransit from "../helpers/manage-transit";
import toggleScroll from "../helpers/toggle-scroll";
import trapFocus from "../helpers/trap-focus";

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_WRAPPER = ".dialog-wrapper";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const CLASS_SHOWN = "is-shown";
const DATA_HIDE = "data-hide";
const DATA_TARGET = "data-target";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${dialogId}"]`);
  const wrapper = dialog.closest(SELECTOR_WRAPPER);
  const backdrop = dialog.nextElementSibling;

  function show() {
    wrapper.classList.add(CLASS_SHOWN);
    dialog.classList.add(CLASS_SHOWN);
    backdrop.classList.add(CLASS_SHOWN);

    manageTransit(dialog, "in");
    manageTransit(backdrop, "in");

    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("keydown", handleFocusTrap);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function hide() {
    Promise.all([manageTransit(dialog, "out"), manageTransit(backdrop, "out")]).then((elements) => {
      elements.forEach((element) => {
        element.classList.remove(CLASS_SHOWN);
      });
      wrapper.classList.remove(CLASS_SHOWN);
    });

    toggleScroll();

    dialog.removeEventListener("keydown", handleFocusTrap);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }

  function handleHideClick(event) {
    if (event.target.hasAttribute(DATA_HIDE)) {
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
