// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TOGGLING = "is-toggling";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));
  const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];

  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    slat.classList.toggle(CLASS_ACTIVATED);
    slat.setAttribute("aria-expanded", !isShown);
    if (!isShown) panel.classList.add(CLASS_SHOWN);

    requestAnimationFrame(() => {
      panel.style.height = !isShown ? 0 : panel.scrollHeight + "px";
      panel.classList.add(CLASS_TOGGLING);

      requestAnimationFrame(() => {
        panel.style.height = !isShown ? panel.scrollHeight + "px" : 0;
      });
    });

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TOGGLING);
        if (isShown) panel.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );
  }

  function handleSlatClick(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (slats.includes(targetSlat)) {
      togglePanel(targetSlat);
    }
  }

  function handleSlatKeydown(event) {
    const targetSlat = event.target.closest(SELECTOR_SLAT);

    if (slats.includes(targetSlat) && navigationKeys.includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key, slats);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
