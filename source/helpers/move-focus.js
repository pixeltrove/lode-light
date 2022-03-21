// MOVE FOCUS
// -----------------------------------------------------------------------------

function moveFocus(elements, key) {
  const lastIndex = elements.length - 1;
  const outgoingIndex = elements.indexOf(document.activeElement);
  let upcomingIndex;

  switch (key) {
    case "ArrowUp":
    case "ArrowLeft":
      upcomingIndex = outgoingIndex === 0 ? lastIndex : outgoingIndex - 1;
      break;
    case "ArrowDown":
    case "ArrowRight":
      upcomingIndex = outgoingIndex === lastIndex ? 0 : outgoingIndex + 1;
      break;
    case "Home":
      upcomingIndex = 0;
      break;
    case "End":
      upcomingIndex = lastIndex;
      break;
  }

  elements[upcomingIndex].focus();
}

export default moveFocus;
