var sentence = "Página en Desarrollo";
var sentenceArray = sentence.split("");
var sentenceLength = sentence.length;

//$(document).ready(function() {
$("#pathLogo2").click(function() {
  $(this).removeClass("animated");
  $("#logo2").addClass("logoClicked");
  $("#mainTextContainer").fadeIn(300);
  setTimeout(typeWriter, 400);
});

$(".menuItem").click(function() {
  $(".divDoc").fadeOut(400);

  var thisId = $(this).attr("id");

  $("#div" + thisId).fadeIn(500);
  $("#fondoBlanco").fadeIn(500);
  $("#MenuContainer").fadeIn(500);
  $("#MenuContainer").css("display", "flex");
  $(".leftMenu,.rightMenu").css("display", "flex");
});

$(".wordRightMenu").click(function() {
  $(".divDoc").fadeOut(100);
  var thisId = $(this).attr("data-id");
  setTimeout(function() {
    $("#" + thisId).fadeIn(300);
  }, 200);
});

$("#x_blanca").click(function() {
  $("#fondoBlanco").fadeOut(500);
  $("#MenuContainer").fadeOut(500);
  $("#MenuContainer").fadeOut(500);
  $(".leftMenu,.rightMenu").fadeOut(500);
});

$(".cross").click(function() {
  $("#x_blanca").trigger("click");
});

//});

var i = 0;
var txt = "Página en Desarrollo";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainTextContainer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
