# Pizza Cost Maker

#### By Isaac Overstreet

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript

## Description

This application is used to determine the cost of a pizza made by the user. By building a userPizza it will determine the final cost based on the costs of size, toppingOne and toppingTwo.

## Setup/Installation Requirements

* Navigate to https://github.com/mrunderoad/pizza-parlor
* Clone the repo onto your local machine
* Open the index.html file to view the page

## Known Bugs

No known bugs at this point in time.

## License

MIT licensing @https://opensource.org/licenses/MIT

Copyright (c) 10/29/2021 Isaac Overstreet




Describe: Pizza()

Test: "Should return pizza object with two toppings and size"
Code: "const myPizza = new Pizza {["bacon", "sausage"], "large"};
Expected Output: pizza {toppings: ["bacon", "sausage"] size: "large"}

Describe: pizza.prototype.createPizza();

Test: "Should return correct pricing on pizza"
Code: pizza.createPizza();
Expected Output: Should be whatever pizza options they chose scored up and returned the value. 