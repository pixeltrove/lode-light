// TRAP FOCUS
// -----------------------------------------------------------------------------

function trapFocus(event, element) {
  const focusableElements = Array.from(element.querySelectorAll(":where(a[href], audio[controls], button, input, select, summary, textarea, video[controls], [contenteditable], [tabindex]):not([tabindex^='-'], [disabled])"));
  const outgoingIndex = focusableElements.indexOf(document.activeElement);
  const lastIndex = focusableElements.length - 1;

  if (event.shiftKey && (outgoingIndex === 0 || document.activeElement === element)) {
    event.preventDefault();
    focusableElements[lastIndex].focus();
  } else if (!event.shiftKey && outgoingIndex === lastIndex) {
    event.preventDefault();
    focusableElements[0].focus();
  }
}

export default trapFocus;
