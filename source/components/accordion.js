// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TOGGLE = "data-toggle";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TOGGLE);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    if (isShown) {
      slat.classList.remove(CLASS_ACTIVATED);
      slat.setAttribute("aria-expanded", "false");
    } else {
      slat.classList.add(CLASS_ACTIVATED);
      slat.setAttribute("aria-expanded", "true");
      panel.classList.add(CLASS_SHOWN);
    }

    requestAnimationFrame(() => {
      panel.style.height = isShown ? panel.scrollHeight + "px" : 0;
      panel.style.overflowY = "hidden";

      requestAnimationFrame(() => {
        panel.style.height = isShown ? 0 : panel.scrollHeight + "px";
      });
    });

    panel.addEventListener(
      "transitionend",
      () => {
        panel.style.overflowY = "";

        if (isShown) {
          panel.classList.remove(CLASS_SHOWN);
        } else {
          panel.style.height = "auto";
        }
      },
      { once: true }
    );
  }

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat) {
      togglePanel(targetSlat);
    }
  }

  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (targetSlat && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
