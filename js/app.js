
var cargarPagina = function(){

  $(document).foundation()
  $(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });





}
// function move() {
// var htmlBar = document.getElementById("html-bar");
// var cssBar = document.getElementById("css-bar");
// var javascriptBar = document.getElementById("javascript-bar");
// var gitBar = document.getElementById("git-bar");
// var width = 10;
// var id = setInterval(frame, 10);
// function frame() {
//   if (width >= 100) {
// 	clearInterval(id);
// } else {
// 	width++;
// 	htmlBar.style.width = width + '%';
// 	htmlBar.innerHTML = width * 1  + '%';
//   }
// }
// }

$(document).ready(cargarPagina);
