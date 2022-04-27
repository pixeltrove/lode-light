// DIALOG
// -----------------------------------------------------------------------------

import { phaseIn, phaseOut } from "../../helpers/manage-phasing";
import toggleScroll from "../../helpers/toggle-scroll";
import trapFocus from "../../helpers/trap-focus";

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
    phaseIn(dialog, "fade");
    phaseIn(scrim, "fade");
    phaseIn(wrapper, "fade");
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("click", handleHideClick);
    dialog.addEventListener("keydown", handleTabKeydown);
    scrim.addEventListener("click", handleScrimClick);
    document.addEventListener("keydown", handleEscapeKeydown);
  }

  function hide() {
    phaseOut(dialog, "fade");
    phaseOut(scrim, "fade");
    phaseOut(wrapper, "fade");
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

  trigger.addEventListener("click", show);
}

export { Dialog, SELECTOR_DIALOG };
