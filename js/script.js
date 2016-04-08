//BUSINESS LOGIQUE
function Pizza(toppings, scale, price) {
  this.toppings = toppings;
  this.scale = scale;
  this.price = price
}

var smallPizza = new Pizza()

function check() {
    document.getElementById("myCheck").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}



//UI LOGIQUE
$(document).ready(function() {
  $("#piz").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

  $("img#hart").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(500).fadeOut(100).fadeIn(200).fadeOut(200).fadeIn(200);

  $("input").click(function() {
    $(this).toggle(500);
  });


});
