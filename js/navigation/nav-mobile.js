// function myFunction() {
//         var x = document.getElementById("myLinks");
//         if (x.style.display === "block") {
//           x.style.display = "none";
//         } else {
//           x.style.display = "block";
//         }
//       }

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger,.header__menu').toggleClass('active');
  });
});