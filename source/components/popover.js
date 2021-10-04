// POPOVER
// -----------------------------------------------------------------------------

import animateTransit from "../helpers/animate-transit";

const SELECTOR_POPOVER = ".popover";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TOGGLE = "data-toggle";

function Popover(popover) {
  const popoverId = popover.id;
  const trigger = document.querySelector(`[${DATA_TOGGLE}="${popoverId}"]`);

  function toggle() {
    const isShown = popover.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);

    if (!isShown) {
      animateTransit("in", popover);
      position();

      window.addEventListener("resize", position);
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      trigger.addEventListener("keydown", handleTab);
      popover.addEventListener("keydown", handleTab);
    } else {
      animateTransit("out", popover);

      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      trigger.removeEventListener("keydown", handleTab);
      popover.removeEventListener("keydown", handleTab);
    }
  }

  function position() {
    popover.style.left = trigger.getBoundingClientRect().left + "px";
    popover.style.top = document.documentElement.scrollTop + trigger.getBoundingClientRect().bottom + "px";
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
