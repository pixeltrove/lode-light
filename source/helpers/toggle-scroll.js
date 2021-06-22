// TOGGLE SCROLL
// -----------------------------------------------------------------------------

const CLASS_NO_SCROLL = "no-scroll";

function toggleScroll() {
  if (window.innerHeight >= document.body.scrollHeight) return;

  const scrollPosition = Math.abs(parseInt(document.body.style.top)) || window.scrollY;

  if (document.body.classList.contains(CLASS_NO_SCROLL)) {
    document.body.classList.remove(CLASS_NO_SCROLL);
    document.body.style.top = "";
    window.scroll(0, scrollPosition);
  } else {
    document.body.classList.add(CLASS_NO_SCROLL);
    document.body.style.top = -scrollPosition + "px";
  }
}

export default toggleScroll;
