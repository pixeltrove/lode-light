// BANNER
// -----------------------------------------------------------------------------

import manageTransit from "../helpers/manage-transit";

const SELECTOR_BANNER = ".banner";
const SELECTOR_BUTTON_DISMISS = ".banner-button-dismiss";

function Banner(banner) {
  function handleDismissClick(event) {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      manageTransit(banner, "out").then(() => {
        banner.remove();
      });
    }
  }

  banner.addEventListener("click", handleDismissClick);
}

const banners = Array.from(document.querySelectorAll(SELECTOR_BANNER));

banners.forEach((banner) => Banner(banner));
