// TOGGLE SCROLL
// -----------------------------------------------------------------------------

const CLASS_NO_SCROLL = "no-scroll";

function toggleScroll() {
  if (window.innerHeight >= document.body.scrollHeight) return;

  const scrollPosition = window.scrollY || Math.abs(parseInt(document.body.style.top));

  if (!document.body.classList.contains(CLASS_NO_SCROLL)) {
    document.body.classList.add(CLASS_NO_SCROLL);
    document.body.style.top = -scrollPosition + "px";
  } else {
    document.body.classList.remove(CLASS_NO_SCROLL);
    document.body.style.top = "";
    window.scroll(0, scrollPosition);
  }
}

export default toggleScroll;
