function Pizza(toppingOne, toppingTwo, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
  this.cost = 15;
}

Pizza.prototype.createPizza = function(){
  if (this.size === "small") {
    this.cost -= 2;
  } else if (this.size === "large") {
    this.cost += 2;
  } else {
  this.cost;
}

  if (this.toppingOne === "topping") {
    this.cost + 1;
  } else if (this.toppingTwo === "topping") {
    this.cost + 1;
  } else {
  this.cost;
}
return this.cost;
};