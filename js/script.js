//BUSINESS LOGIQUE
function Pizza(toppings, size, sauce, base) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
  this.base = base;
}

Pizza.prototype.orderTotal = function() {
  return total = parseInt(this.toppings)+ parseInt(this.size) + parseInt(this.sauce) + parseInt(this.base);
}


//UI LOGIQUE
$(document).ready(function() {

  $("#piz").fadeIn(1000).fadeOut(1000).fadeIn(1000).addClass("red").fadeOut(1000).fadeIn(1000);

  $("img#hart").fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(500).fadeOut(100).fadeIn(200).fadeOut(200).fadeIn(200);

  $("input").attr("src","../images/heart.ico");

  $("input").click(function() {
    $(this).toggle(500);
  });

  $("form#newOrder").submit(function(event) {

  event.preventDefault();

  $("#pizza").addClass('pizz');

  var pizzaSize = parseInt($(".size").val());
  var pizzaTopping = parseInt($(".top").val());
  var pizzaSauce = parseInt($(".sauce").val());
  var pizzaBase = parseInt($(".base").val());

  var newPizza = new Pizza (pizzaTopping, pizzaSize, pizzaSauce, pizzaBase);

  $(".row1").slideUp();

  newPizza.orderTotal();


  $("p").text("Your Pizza Total: " + "$" + total).addClass('tote').fadeIn(1000);


  });



});
