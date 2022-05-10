// INITIALIZE COMPONENT
// -----------------------------------------------------------------------------

function initializeComponent(eventType, selector, component) {
  document.addEventListener(eventType, (event) => {
    if (event.target.closest(selector)) component(event);
  });
}

export default initializeComponent;
