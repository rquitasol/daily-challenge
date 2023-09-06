/**
Sum of Resistance in Series Circuits
When resistors are connected together in series,
 the same current passes through each resistor in 
 the chain and the total resistance, RT, of the circuit must be equal to 
 the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...
Create a function that takes an array of values resistance that are connected in series, 
and calculates the total resistance of the circuit in ohms. 
The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

Examples
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
 */

function seriesResistance(arr) {
  const total = arr.reduce((acc, curr) => acc + curr);
  return `${total} ${total > 1 ? "ohms" : "ohm"} `;
}

// console.log(seriesResistance([1, 5, 6, 3])); // ➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])); //➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])); //➞ "1.0 ohm"

/**
  Largest Swap
  Write a function that takes a two-digit number and 
  determines if it's the largest of two possible digit swaps.

  To illustrate:
  largestSwap(27) ➞ false
  largestSwap(43) ➞ true
  If 27 is our input, we should return false because swapping 
  the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

  Examples
  largestSwap(14) ➞ false
  largestSwap(53) ➞ true
  largestSwap(99) ➞ true
 */

function largestSwap(num) {
  var splitNum = num.toString().split("");
  var num2 = Number([splitNum[1], splitNum[0]].join(""));
  return num === num2 ? true : num > num2;
}

// console.log(largestSwap(14)); //➞ false
// console.log(largestSwap(53)); //➞ true
// console.log(largestSwap(99)); //➞ true

/**
  What's Hiding Amongst the Crowd?
  A word is on the loose and now has tried to hide amongst a crowd of tall letters!
  Help write a function to detect what the word is, knowing the following rules:

  The wanted word is in lowercase.
  The crowd of letters is all in uppercase.
  Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

  Examples
  detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
  detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
  detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
 */

function detectWord(str) {
  return str
    .split("")
    .filter((letter) => {
      return letter === letter.toLowerCase();
    })
    .join("");
}

// console.log(detectWord("UcUNFYGaFYFYGtNUH")); // ➞ "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // ➞ "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); //  ➞ "embezzlement"

/**
  Older Than Me
  Create a method in the Person class which returns how another person's age compares. 
  Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
  return a sentence in the following format:

  {other person name} is {older than / younger than / the same age as} me.

  Examples
  p1 = Person("Samuel", 24)
  p2 = Person("Joel", 36)
  p3 = Person("Lily", 24)

  p1.compareAge(p2) ➞ "Joel is older than me."
  p2.compareAge(p1) ➞ "Samuel is younger than me."
  p1.compareAge(p3) ➞ "Lily is the same age as me."
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    return this.age === other.age
      ? `${other.name} is the same age as me`
      : this.age < other.age
      ? `${other.name} is older than me`
      : `${other.name} is younger than me`;
  }
}

// const p1 = new Person("Samuel", 24);
// const p2 = new Person("Joel", 36);
// const p3 = new Person("Lily", 24);

// console.log(p1.compareAge(p2)); // ➞ "Joel is older than me."
// console.log(p2.compareAge(p1)); // ➞ "Samuel is younger than me."
// console.log(p1.compareAge(p3)); // ➞ "Lily is the same age as me."

/**
  Drink Sorting
  You will be given an array of drinks, with each drink being an object with two properties: name and price. 
  Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

  Assume that the following array of drink objects needs to be sorted:
  drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

  The output of the sorted drinks object will be:
  Examples
  sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */

function sortDrinkByPrice(drinks) {
  return drinks.sort((a, b) => a.price - b.price);
}

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

// console.log(sortDrinkByPrice(drinks));

/**
  Tuck in Array
  Create a function that takes two arrays and insert the second array in the middle of the first array.

  Examples
  tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
  tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
 */

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15, 150], [45, 75, 35])); // ➞ [15, 45, 75, 35, 150]
// console.log(
//   tuckIn(
//     [
//       [1, 2],
//       [5, 6],
//     ],
//     [[3, 4]]
//   )
// ); // ➞ [[1, 2], [3, 4], [5, 6]]

/**
  Find the Amount of Potatoes
  Create a function to return the amount of potatoes there are in a string.

  Examples
  potatoes("potato") ➞ 1
  potatoes("potatopotato") ➞ 2
  potatoes("potatoapple") ➞ 1
 */

function potatoes(str) {
  return str.split("potato").length - 1;
}

// console.log(potatoes("potato")); // ➞ 1
// console.log(potatoes("potatopotato")); //➞ 2
// console.log(potatoes("potatoapple")); // ➞ 1
