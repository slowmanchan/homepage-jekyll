var $root = $('html, body');
$('.sscroll').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


var scrollPos = window.scrollY;
var header = document.getElementById("navbar");
var spacer = document.getElementById("spacer");

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;

  if(scrollPos > 390) {
    header.classList.add("fixed");
    spacer.style.display = "block";
  } else {
    header.classList.remove("fixed");
    spacer.style.display = "none";
  }
})
