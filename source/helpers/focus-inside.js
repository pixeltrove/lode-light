// FOCUS INSIDE
// -----------------------------------------------------------------------------

function focusInside(event, element) {
  const focusableElements = Array.from(element.querySelectorAll("a[href], audio[controls], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable]"));
  const lastIndex = focusableElements.length - 1;
  const focusIndex = focusableElements.indexOf(document.activeElement);

  if ((event.shiftKey && focusIndex === 0) || (event.shiftKey && document.activeElement === element)) {
    event.preventDefault();
    focusableElements[lastIndex].focus();
  } else if (!event.shiftKey && focusIndex === lastIndex) {
    event.preventDefault();
    focusableElements[0].focus();
  }
}

export default focusInside;
