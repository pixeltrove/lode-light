// TOGGLE SCROLL
// -----------------------------------------------------------------------------

function toggleScroll() {
  const scrollPosition = window.scrollY || Math.abs(parseInt(document.body.style.top));

  if (window.innerHeight < document.documentElement.scrollHeight && document.body.style.overflowY === "") {
    document.body.style.position = "fixed";
    document.body.style.top = -scrollPosition + "px";
    document.body.style.overflowY = "scroll";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    window.scroll(0, scrollPosition);
  }
}

export default toggleScroll;
