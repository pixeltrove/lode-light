// DIALOG
// -----------------------------------------------------------------------------

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const CLASS_NO_SCROLL = "no-scroll";
const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITING_IN = "is-transiting-in";
const CLASS_TRANSITING_OUT = "is-transiting-out";
const DATA_HIDE = "data-hide";
const DATA_TARGET = "data-target";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${dialogId}"]`);
  const wrapper = dialog.parentElement;
  const backdrop = dialog.nextElementSibling;

  function show() {
    wrapper.classList.add(CLASS_SHOWN);
    transitToShown();
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();

    dialog.addEventListener("keydown", handleFocusTrap);
    dialog.addEventListener("click", handleHideClick);
    backdrop.addEventListener("click", handleBackdropClick);
    document.addEventListener("keydown", handleEscape);
  }

  function transitToShown() {
    dialog.classList.add(CLASS_SHOWN);
    dialog.classList.add(CLASS_TRANSITING_IN);
    backdrop.classList.add(CLASS_SHOWN);
    backdrop.classList.add(CLASS_TRANSITING_IN);

    dialog.addEventListener(
      "animationend",
      () => {
        dialog.classList.remove(CLASS_TRANSITING_IN);
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

    dialog.removeEventListener("keydown", handleFocusTrap);
    dialog.removeEventListener("click", handleHideClick);
    backdrop.removeEventListener("click", handleBackdropClick);
    document.removeEventListener("keydown", handleEscape);
  }

  function transitToHidden() {
    dialog.classList.add(CLASS_TRANSITING_OUT);
    backdrop.classList.add(CLASS_TRANSITING_OUT);

    dialog.addEventListener(
      "animationend",
      () => {
        dialog.classList.remove(CLASS_TRANSITING_OUT);
        dialog.classList.remove(CLASS_SHOWN);
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

  function handleFocusTrap(event) {
    if (event.key === "Tab") {
      const focusableElements = Array.from(dialog.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]"));
      const lastIndex = focusableElements.length - 1;
      const focusIndex = focusableElements.indexOf(document.activeElement);

      if ((event.shiftKey && focusIndex === 0) || (event.shiftKey && document.activeElement === dialog)) {
        event.preventDefault();
        focusableElements[focusableElements.length - 1].focus();
      } else if (!event.shiftKey && focusIndex === lastIndex) {
        event.preventDefault();
        focusableElements[0].focus();
      }
    }
  }

  trigger.addEventListener("click", show);
}

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
