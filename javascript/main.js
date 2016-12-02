var scrollPos = window.scrollY;
var header = document.getElementById("navbar");
var spacer = document.getElementById("spacer");

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;

  if(scrollPos > 340) {
    header.classList.add("fixed");
    spacer.style.display = "block";
  } else {
    header.classList.remove("fixed");
    spacer.style.display = "none";
  }
})
