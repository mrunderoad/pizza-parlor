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


## Tests

#### Describe: Pizza()

Test: "Should return pizza price based on size"
Code: "const myPizza = new Pizza {"small", "medium" or "large"};
Expected Output: "13" "15" or "17"

#### Describe: pizza.prototype.createCost();

Test: "Should return correct pricing on toppings"
Code: createCost();
Expected Output: 1, 2, or 3 depending on cost pricing. 

Test: "Should return cost with size + toppings"
Code: createCost();
Expected Output: small(13) + cost of toppings. medium(15) plus cost of toppings large(17) plus cost of toppings.

Test: "Should correctly display total cost"
Code: costToDisplay();
Expected Output: Any cost of pizza size plus toppings. 