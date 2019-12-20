var sentence = "Página en Desarrollo";
var sentenceArray = sentence.split("");
var sentenceLength = sentence.length;

$(document).ready(function() {
/*
  $("#pathLogo2").click(function() {
    $("#mainTextContainer").fadeIn(300);
    setTimeout(typeWriter, 400);

    var logo2 = document.getElementById("logo2");
    logo2.classList.add("logoClicked");

    var pathLogo2 = document.getElementById("pathLogo2");
    pathLogo2.classList.remove("animated");
  });
  */
});

function mostrarInicio() {
  $("#fondoBlanco").fadeOut(200);
  $("#MenuContainer").fadeOut(200);
  $("#MenuContainerLeft").fadeOut(200);
  $(".leftMenu,.rightMenu").fadeOut(200);
  esconderBarra();
  setInactiveSelector();
}

function mostrarMenu(item) {
  $(".divDoc").fadeOut(300);
  var thisId = $(item).attr("data-id");
  $("#div" + thisId).fadeIn(300);
  $("#fondoBlanco").fadeIn(300);
  $("#MenuContainer").fadeIn(300);
  $("#MenuContainerLeft").fadeOut(100);
  $("#MenuContainer").css("display", "flex");
  $(".leftMenu,.rightMenu").css("display", "flex");
  setTimeout(function() {
    $("#" + thisId).fadeIn(300);
    esconderBarra();
    setInactiveSelector();
  }, 200);
}

function mostrarMenuIzquierda(item) {
  var thisId = $(item).attr("data-id");
  var thisPos = $(item).attr("data-pos");

  $(".divDocLeftMenu")
    .not("#div" + thisId)
    .hide();
  $("#div" + thisId).fadeIn(300);
  $("#MenuContainerLeft").fadeIn(300);
  $("#MenuContainerLeft").css("display", "flex");
  setActiveSelector(thisId);
  activarBarra();
  posicionarBarra(thisPos);
}

function setActiveSelector(thisId) {
  $(".menuItem")
    .not($('.menuItem[data-id="' + thisId + '"]'))
    .removeClass("selectedLeftMenu");
  if (!$('.menuItem[data-id="' + thisId + '"]').hasClass("selectedLeftMenu"))
    $('.menuItem[data-id="' + thisId + '"]').addClass("selectedLeftMenu");
}

function setInactiveSelector() {
  $(".menuItem").removeClass("selectedLeftMenu");
}

function posicionarBarra(pos) {
  $("#bar2-leftmenu").removeClass("barMenuPos1");
  $("#bar2-leftmenu").removeClass("barMenuPos2");
  $("#bar2-leftmenu").removeClass("barMenuPos3");
  $("#bar2-leftmenu").removeClass("barMenuPos4");

  $("#bar2-leftmenu").addClass("barMenuPos" + pos);
}

function activarBarra() {
  if (!$("#bar2-leftmenu").hasClass("barMenuEnabled"))
    $("#bar2-leftmenu").addClass("barMenuEnabled");

  if ($("#bar2-leftmenu").hasClass("barMenuDisabled"))
    $("#bar2-leftmenu").removeClass("barMenuDisabled");
}

function esconderBarra() {
  if ($("#bar2-leftmenu").hasClass("barMenuEnabled"))
    $("#bar2-leftmenu").removeClass("barMenuEnabled");

  if (!$("#bar2-leftmenu").hasClass("barMenuDisabled"))
    $("#bar2-leftmenu").addClass("barMenuDisabled");
}

/*
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
*/

$(document).keyup(function(e) {
  //if (e.keyCode === 13) $('.save').click();     // enter
  if (e.keyCode === 27) {
    if (
      $("#MenuContainer").is(":visible") ||
      $("#MenuContainerLeft").is(":visible")
    )
      mostrarInicio();
  }
});
