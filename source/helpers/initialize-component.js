// INITIALIZE COMPONENT
// -----------------------------------------------------------------------------

function initializeComponent(config) {
  document.addEventListener(config.eventType, (event) => {
    if (config.componentSelector) {
      if (event.target.closest(config.componentSelector)) config.componentDefinition(event);
    } else if (config.triggerSelector) {
      if (event.target.closest(config.triggerSelector)) config.componentDefinition(event);
    }
  });
}

export default initializeComponent;
