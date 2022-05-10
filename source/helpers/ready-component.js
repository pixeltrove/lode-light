// READY COMPONENT
// -----------------------------------------------------------------------------

function readyComponent(selector, component) {
  document.addEventListener("click", (event) => {
    if (event.target.closest(selector)) component(event);
  });
}

export default readyComponent;
