function Pizza(cost, size, toppingOne, toppingTwo) {
  this.cost = 15;
  this.size = ("small", "medium", "large");
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

Pizza.prototype.createCost = function(){
  if (this.size === "small") {
    this.cost -= 2;
  } else if (this.size === "large") {
    this.cost += 1;
  } else {
    this.cost;
    
  }
}

 /* if (this.toppingOne === "topping1") {
    this.cost += 1;
  } else if (this.toppingTwo === "topping2") {
    this.cost += 1;
  } else {
  this.cost + 2;
}*/

function displayCost() {
  $("#cost").text(this.cost);
  $("#topping1").text();
  $("#topping2").text();
}

$(document).ready(function() {
  $("form#pizza-size").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=crust]:checked").val();
    let toppingOne = $("input:radio[name=topping1]:checked").val();
    let toppingTwo = $("input:radio[name=topping2]:checked").val();
    $("input:radio[name=crust]:checked").val("");
    $("input:radio[name=topping1]:checked").val("");
    $("input:radio[name=topping2]:checked").val("");
    let userPizza = new Pizza(size, cost, toppingOne, toppingTwo)
    userPizza.createCost();
    console.log(userPizza.cost);
  });
})