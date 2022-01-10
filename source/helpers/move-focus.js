// MOVE FOCUS
// -----------------------------------------------------------------------------

function moveFocus(key, elements) {
  const outgoingIndex = elements.indexOf(document.activeElement);
  const lastIndex = elements.length - 1;
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
