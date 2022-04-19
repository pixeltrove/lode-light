// INITIALIZE COMPONENT
// -----------------------------------------------------------------------------

function initializeComponent(component, selector) {
  const elements = Array.from(document.querySelectorAll(selector));

  elements.forEach((element) => component(element));
}

export default initializeComponent;
