// POPOVER
// -----------------------------------------------------------------------------

import manageTransit from "../helpers/manage-transit";

const SELECTOR_POPOVER = ".popover";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Popover(popover) {
  const popoverId = popover.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${popoverId}"]`);

  function toggle() {
    const isShown = popover.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);

    if (!isShown) {
      popover.classList.add(CLASS_SHOWN);

      manageTransit(popover, "in");

      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      popover.addEventListener("keydown", handleTab);
    } else {
      manageTransit(popover, "out").then(() => {
        popover.classList.remove(CLASS_SHOWN);
      });

      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      trigger.removeEventListener("keydown", handleTab);
      popover.removeEventListener("keydown", handleTab);
    }
  }

  function handleOutsideClick(event) {
    if (!trigger.contains(event.target) && !popover.contains(event.target)) {
      toggle();
    }
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      toggle();
    }
  }

  function handleTab(event) {
    const focusableElements = Array.from(popover.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if ((event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      toggle();
    }
  }

  trigger.addEventListener("click", toggle);
}

const popovers = Array.from(document.querySelectorAll(SELECTOR_POPOVER));

popovers.forEach((popover) => Popover(popover));
