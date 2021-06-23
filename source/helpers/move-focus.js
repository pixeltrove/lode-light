// MOVE FOCUS
// -----------------------------------------------------------------------------

function moveFocus(key, elements) {
  const currentIndex = elements.indexOf(document.activeElement);
  const lastIndex = elements.length - 1;
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

  elements[upcomingIndex].focus();
}

export default moveFocus;
