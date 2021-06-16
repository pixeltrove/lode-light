// NOTIFICATION
// -----------------------------------------------------------------------------

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";
const CLASS_TRANSITING_OUT = "is-transiting-out";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      transitToHidden();
    }
  }

  function transitToHidden() {
    notification.classList.add(CLASS_TRANSITING_OUT);

    notification.addEventListener(
      "animationend",
      () => {
        notification.remove();
      },
      { once: true }
    );
  }

  notification.addEventListener("click", handleDismiss);
}

const notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));

notifications.forEach((notification) => Notification(notification));
