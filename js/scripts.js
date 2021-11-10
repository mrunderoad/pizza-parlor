function Pizza(size, toppingOne, toppingTwo) {
  this.cost = 15;
  this.size = (size);
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
}

Pizza.prototype.createCost = function(){
  if (this.size === "13") {
    this.cost -= 2;
  } else if (this.size === "15") {
    this.cost;
  } else if (this.size === "17") {
    this.cost += 2;  
  }

  this.cost += (parseInt(this.toppingOne) + parseInt(this.toppingTwo))
   
}

function displayCost(costToDisplay) {
  $("#cost").text(costToDisplay);
}

$(document).ready(function() {
  $("form#pizza-size").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=crust]:checked").val();
    let toppingOne = $("input:radio[name=topping1]:checked").val();
    let toppingTwo = $("input:radio[name=topping2]:checked").val();
    let userPizza = new Pizza(size, toppingOne, toppingTwo)
    userPizza.createCost();
    displayCost(userPizza.cost);
    console.log(userPizza);
  });
})