// NOTIFICATION
// -----------------------------------------------------------------------------

import manageTransit from "../helpers/manage-transit";

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_DISMISS = "[data-dismiss]";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_DISMISS)) {
      manageTransit(notification, "out").then(() => {
        notification.remove();
      });
    }
  }

  notification.addEventListener("click", handleDismiss);
}

const notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));

notifications.forEach((notification) => Notification(notification));
