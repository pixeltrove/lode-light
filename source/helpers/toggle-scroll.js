// TOGGLE SCROLL
// -----------------------------------------------------------------------------

function toggleScroll() {
  if (window.innerHeight >= document.body.scrollHeight) return;

  const scrollPosition = window.scrollY || Math.abs(parseInt(document.body.style.top));

  if (document.body.style.overflowY === "") {
    document.body.style.position = "fixed";
    document.body.style.top = -scrollPosition + "px";
    document.body.style.overflowY = "scroll";
    document.body.style.width = "100%";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    document.body.style.width = "";
    window.scroll(0, scrollPosition);
  }
}

export default toggleScroll;
