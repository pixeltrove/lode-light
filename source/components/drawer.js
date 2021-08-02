// DRAWER
// -----------------------------------------------------------------------------

import manageTransit from "../helpers/manage-transit";
import toggleScroll from "../helpers/toggle-scroll";
import trapFocus from "../helpers/trap-focus";

const SELECTOR_DRAWER = ".drawer";
const SELECTOR_WRAPPER = ".drawer-wrapper";
const SELECTOR_BACKDROP = ".drawer-backdrop";
const SELECTOR_HIDE = "[data-hide]";
const CLASS_SHOWN = "is-shown";
const DATA_SHOW = "data-show";

function Drawer(drawer) {
  const drawerId = drawer.id;
  const trigger = document.querySelector(`[${DATA_SHOW}="${drawerId}"]`);
  const wrapper = drawer.closest(SELECTOR_WRAPPER);
  const backdrop = wrapper.querySelector(SELECTOR_BACKDROP);

  function show() {
    wrapper.classList.add(CLASS_SHOWN);
    drawer.classList.add(CLASS_SHOWN);
    backdrop.classList.add(CLASS_SHOWN);

    manageTransit(drawer, "in");
    manageTransit(backdrop, "in");

    drawer.setAttribute("tabindex", -1);
    drawer.focus();
    toggleScroll();

    drawer.addEventListener("keydown", handleFocusTrap);
    drawer.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function hide() {
    Promise.all([manageTransit(drawer, "out"), manageTransit(backdrop, "out")]).then((elements) => {
      elements.forEach((element) => {
        element.classList.remove(CLASS_SHOWN);
      });
      wrapper.classList.remove(CLASS_SHOWN);
    });

    toggleScroll();

    drawer.removeEventListener("keydown", handleFocusTrap);
    drawer.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }

  function handleHideClick(event) {
    if (event.target.closest(DATA_HIDE)) {
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

  function handleHide(event) {
    if (event.target.closest(SELECTOR_HIDE)) {
      hide();
    }
  }

  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      trapFocus(event, drawer);
    }
  }

  trigger.addEventListener("click", show);
  drawer.addEventListener("click", handleHide);
}

const drawers = Array.from(document.querySelectorAll(SELECTOR_DRAWER));

drawers.forEach((drawer) => Drawer(drawer));
