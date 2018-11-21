$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

AOS.init();

// counterUP animation
var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
};

$(window).on('scroll', function() {
  var yScrollPos = window.pageYOffset;
  var scrollPosTest = 154;

  if(yScrollPos >= scrollPosTest) {
    var demo = new CountUp('counter', 0, 100000, 0, 5, options);
    var demo2 = new CountUp('counter2', 0, 100, 0, 5, options);
    if (!demo.error && !demo2.error) {
      demo.start();
      demo2.start();
    } else {
      console.error(demo.error && demo2.error);
    }
    $(window).off('scroll');
  }
})

/* REVIEW SECTION FUNCTION */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("clients-review");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
/* RESIZING FUNCTION */
var aboutMeImg = document.querySelector("#about-me-picture");
var aboutMeImg2 = document.querySelector("#about-me-picture2");
var size = window.matchMedia("(max-width: 700px)");
var size2 = window.matchMedia("(max-width: 800px)");




