// NOTIFICATION
// -----------------------------------------------------------------------------

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";
const CLASS_TRANSITIONING_OUT = "is-transitioning-out";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      transitionToHidden();
    }
  }

  function transitionToHidden() {
    notification.classList.add(CLASS_TRANSITIONING_OUT);

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
