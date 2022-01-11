// TRAP FOCUS
// -----------------------------------------------------------------------------

function trapFocus(event, element) {
  const focusableElements = Array.from(element.querySelectorAll(":where(a[href], audio[controls], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), summary, textarea:not([disabled]), video[controls], [contenteditable], [tabindex]):not([tabindex^='-'])"));
  const outgoingIndex = focusableElements.indexOf(document.activeElement);
  const lastIndex = focusableElements.length - 1;
  const usingShift = event.shiftKey;

  if (usingShift && (outgoingIndex === 0 || document.activeElement === element)) {
    event.preventDefault();
    focusableElements[lastIndex].focus();
  } else if (!usingShift && outgoingIndex === lastIndex) {
    event.preventDefault();
    focusableElements[0].focus();
  }
}

export default trapFocus;
