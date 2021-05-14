// NOTIFICATION
// -----------------------------------------------------------------------------

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      notification.remove();
    }
  }

  notification.addEventListener("click", handleDismiss);
}

const notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));

notifications.forEach((notification) => Notification(notification));
