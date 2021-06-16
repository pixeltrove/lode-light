// DRAWER
// -----------------------------------------------------------------------------

const SELECTOR_DRAWER = ".drawer";
const SELECTOR_BACKDROP = ".drawer-backdrop";
const SELECTOR_BUTTON_DISMISS = ".drawer-button-dismiss";
const CLASS_NO_SCROLL = "no-scroll";
const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITING_IN = "is-transiting-in";
const CLASS_TRANSITING_OUT = "is-transiting-out";
const DATA_HIDE = "data-hide";
const DATA_TARGET = "data-target";

function Drawer(drawer) {
  const drawerId = drawer.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${drawerId}"]`);
  const wrapper = drawer.parentElement;
  const backdrop = drawer.nextElementSibling;

  function show() {
    wrapper.classList.add(CLASS_SHOWN);
    transitToShown();
    drawer.setAttribute("tabindex", -1);
    drawer.focus();
    toggleScroll();

    drawer.addEventListener("keydown", handleFocusTrap);
    drawer.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function transitToShown() {
    drawer.classList.add(CLASS_SHOWN);
    drawer.classList.add(CLASS_TRANSITING_IN);
    backdrop.classList.add(CLASS_SHOWN);
    backdrop.classList.add(CLASS_TRANSITING_IN);

    drawer.addEventListener(
      "animationend",
      () => {
        drawer.classList.remove(CLASS_TRANSITING_IN);
      },
      { once: true }
    );
    backdrop.addEventListener(
      "animationend",
      () => {
        backdrop.classList.remove(CLASS_TRANSITING_IN);
      },
      { once: true }
    );
  }

  function hide() {
    transitToHidden();
    toggleScroll();

    drawer.removeEventListener("keydown", handleFocusTrap);
    drawer.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }

  function transitToHidden() {
    drawer.classList.add(CLASS_TRANSITING_OUT);
    backdrop.classList.add(CLASS_TRANSITING_OUT);

    drawer.addEventListener(
      "animationend",
      () => {
        drawer.classList.remove(CLASS_TRANSITING_OUT);
        drawer.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );
    backdrop.addEventListener(
      "animationend",
      () => {
        backdrop.classList.remove(CLASS_TRANSITING_OUT);
        backdrop.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );

    Promise.all(
      wrapper.getAnimations({ subtree: true }).map(function (animation) {
        return animation.finished;
      })
    ).then(function () {
      return wrapper.classList.remove(CLASS_SHOWN);
    });
  }

  function toggleScroll() {
    if (window.innerHeight >= document.body.scrollHeight) return;

    const scrollPosition = Math.abs(parseInt(document.body.style.top)) || window.scrollY;

    if (document.body.classList.contains(CLASS_NO_SCROLL)) {
      document.body.classList.remove(CLASS_NO_SCROLL);
      document.body.style.top = "";
      window.scroll(0, scrollPosition);
    } else {
      document.body.classList.add(CLASS_NO_SCROLL);
      document.body.style.top = -scrollPosition + "px";
    }
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

  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      hide();
    }
  }

  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      const focusableElements = Array.from(drawer.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]"));
      const lastIndex = focusableElements.length - 1;
      const focusIndex = focusableElements.indexOf(document.activeElement);

      if ((event.shiftKey && focusIndex === 0) || (event.shiftKey && document.activeElement === drawer)) {
        event.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
      } else if (!event.shiftKey && focusIndex === lastIndex) {
        event.preventDefault();
        focusableElements[0].focus();
      }
    }
  }

  trigger.addEventListener("click", show);
  drawer.addEventListener("click", handleDismiss);
}

const drawers = Array.from(document.querySelectorAll(SELECTOR_DRAWER));

drawers.forEach((drawer) => Drawer(drawer));
