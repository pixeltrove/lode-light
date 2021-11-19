// NOTIFICATION
// -----------------------------------------------------------------------------

import managePhasing from "../helpers/manage-phasing";

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_DISMISS = "[data-dismiss]";

function Notification(notification) {
  function handleDismiss(event) {
    if (event.target.closest(SELECTOR_DISMISS)) {
      managePhasing(notification);
    }
  }

  notification.addEventListener("click", handleDismiss);
}

Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION)).forEach((notification) => Notification(notification));
