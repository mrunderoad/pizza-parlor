function Pizza(toppingOne, toppingTwo, size) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.size = size;
  this.cost = 15;
}

//pricings crsut small- -2 medium nothing large +2
Pizza.prototype.createPizza = function(){
  if (this.size === "small") {
  this.cost -= 2;
} else if (this.size === "large") {
  this.cost += 2;
} else {
  this.cost;
}
}