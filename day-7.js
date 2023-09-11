import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Up the Hill, Down the Hill
If a person traveled up a hill for 18mins at 20mph and then traveled back down 
the same path at 60mph then their average speed traveled was 30mph.
Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. 
Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.

Examples
aveSpd(18, 20, 60) ➞ 30
aveSpd(30, 10, 30) ➞ 15
aveSpd(30, 8, 24) ➞ 12
Notes
The solution is not dividing the sum of the speeds by 2.
Check the Resources tab if your stuck.
 */

function aveSpd(uphillTime, uphillRate, downhillRate) {
  return (2 * uphillRate * downhillRate) / (uphillRate + downhillRate);
}

Test.assertEquals(aveSpd(18, 10, 30), 15);
Test.assertEquals(aveSpd(18, 20, 60), 30);
Test.assertEquals(aveSpd(30, 10, 30), 15);
Test.assertEquals(aveSpd(30, 8, 24), 12);

/**
 Calculate the Total Price of Groceries
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
 A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3
 */

function getTotalPrice(groceries) {
  let total = groceries.reduce((acc, cur) => {
    return acc + cur?.quantity * cur?.price;
  }, 0);

  return total % 1 !== 0 ? Number(total.toFixed(1)) : Number(total);
}

Test.assertEquals(
  getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]),
  1.5
);

Test.assertEquals(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ]),
  4
);

Test.assertEquals(
  getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]),
  4.5
);

Test.assertEquals(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ]),
  10.4
);

Test.assertEquals(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ]),
  0.3
);
