// READY COMPONENT
// -----------------------------------------------------------------------------

function readyComponent(eventTarget, eventType, selector, component) {
  eventTarget.addEventListener(eventType, (event) => {
    if (event.target.closest(selector)) component(event);
  });
}

export default readyComponent;
