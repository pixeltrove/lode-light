// NOTIFICATION
// -----------------------------------------------------------------------------

import togglePoppable from "../helpers/miscellaneous/toggle-poppable";

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

Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION)).forEach((notification) => Notification(notification));
