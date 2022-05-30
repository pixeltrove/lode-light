// INITIALIZE COMPONENT
// -----------------------------------------------------------------------------

function initializeComponent(definition, selector) {
  const elements = Array.from(document.querySelectorAll(selector));

  elements.forEach((element) => definition(element));
}

export default initializeComponent;
