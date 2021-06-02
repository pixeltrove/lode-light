// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_SLAT = ".accordion-slat";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const CLASS_TRANSITIONING = "is-transitioning";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const slats = Array.from(accordion.querySelectorAll(SELECTOR_SLAT));

  function togglePanel(slat) {
    const panelId = slat.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    slat.classList.toggle(CLASS_ACTIVATED);
    slat.setAttribute("aria-expanded", !isShown);

    isShown ? transitionToHidden(panel) : transitionToShown(panel);
  }

  function transitionToShown(panel) {
    panel.classList.add(CLASS_SHOWN);
    panel.classList.add(CLASS_TRANSITIONING);
    panel.style.height = panel.scrollHeight + "px";

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TRANSITIONING);
      },
      { once: true }
    );
  }

  function transitionToHidden(panel) {
    panel.classList.add(CLASS_TRANSITIONING);
    panel.style.height = 0;

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove(CLASS_TRANSITIONING);
        panel.classList.remove(CLASS_SHOWN);
      },
      { once: true }
    );
  }

  function moveFocus(key) {
    const currentIndex = slats.indexOf(document.activeElement);
    const lastIndex = slats.length - 1;
    let upcomingIndex;

    switch (key) {
      case "ArrowUp":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowDown":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    slats[upcomingIndex].focus();
  }

  function handleSlatClick(event) {
    if (event.target.closest(SELECTOR_SLAT)) {
      togglePanel(event.target.closest(SELECTOR_SLAT));
    }
  }

  function handleSlatKeydown(event) {
    if (event.target.closest(SELECTOR_SLAT) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.key);
    }
  }

  accordion.addEventListener("click", handleSlatClick);
  accordion.addEventListener("keydown", handleSlatKeydown);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
