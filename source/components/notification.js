// NOTIFICATION
// -----------------------------------------------------------------------------

import togglePoppable from "../helpers/toggle-poppable";

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_DISMISS = "[data-dismiss]";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_DISMISS)) {
      togglePoppable(notification);
    }
  }

  notification.addEventListener("click", handleDismiss);
}

const notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));

notifications.forEach((notification) => Notification(notification));
