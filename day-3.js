/**
 Slightly Superior
    You will be given two extremely similar arrays, 
    but exactly one of the items in an array will be valued 
    slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

    Create a function that returns whether the first array is slightly superior to that of the second.

    Examples
    isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
    // The pair of items at each index are compared in turn.
    // 1 from the first array is the same as 1 from the second array.
    // 2 is the same as 2.
    // However, 4 is greater than 3, so first array is superior.

    isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
    isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true
    isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
    isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
 */

function isFirstSuperior(arr1, arr2) {
  return (
    arr1.filter((val, idx) => {
      return val > arr2[idx];
    }).length > 0
  );
}

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); // ➞ true
// console.log(
//   isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
// ); // ➞ true
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); // ➞ false
// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); // ➞ false

/**
     Count Instances of a Character in a String
    Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

    Examples
    charCount("a", "edabit") ➞ 1
    charCount("c", "Chamber of secrets") ➞ 1
    charCount("b", "big fat bubble") ➞ 4
 */

function charCount(myChar, str) {
  return str.split(myChar).length - 1;
}

// console.log(charCount("a", "edabit")); // ➞ 1
// console.log(charCount("c", "Chamber of secrets")); // ➞ 1
// console.log(charCount("b", "big fat bubble")); // ➞ 4

/**
    How Much is True?
    Create a function which returns the number of true values there are in an array.

    Examples
    countTrue([true, false, false, true, false]) ➞ 2
    countTrue([false, false, false, false]) ➞ 0
    countTrue([]) ➞ 0
    
 */

function countTrue(arr) {
  return arr.filter((val) => val === true).length;
}

// console.log(countTrue([true, false, false, true, false])); // ➞ 2
// console.log(countTrue([false, false, false, false])); // ➞ 0
// console.log(countTrue([])); // ➞ 0

/**
    https://edabit.com/challenge/hzxN9bAebBPNqdQto

     A Redundant Function
    Write a function redundant that takes in a string str and returns a function that returns str.

    Examples
    const f1 = redundant("apple")
    f1() ➞ "apple"
    const f2 = redundant("pear")
    f2() ➞ "pear"
    const f3 = redundant("")
    f3() ➞ ""
 */

function redundant(str) {
  return function (...args) {
    return str;
  };
}

// const f1 = redundant("apple");
// console.log(f1()); // ➞ "apple"
// const f2 = redundant("pear");
// console.log(f2()); // ➞ "pear"
// const f3 = redundant("");
// console.log(f3()); // ➞ ""

/**
    https://edabit.com/challenge/NHfYRHg2tDtcZyykB

     Tile Teamwork Tactics
    In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. 
    If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

    Can you reach your friend's tile number in the next roll? 
    Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

    Examples
    possibleBonus(3, 7) ➞ true
    possibleBonus(1, 9) ➞ false
    possibleBonus(5, 3) ➞ false

    Notes
    You cannot move backward (which is why example #3 doesn't work).
    If you are already on the same tile, return false, as you would be advancing away.
    Expect only positive integer inputs.
 */

function possibleBonus(a, b) {
  if (a >= b) {
    return false;
  }
  return a + 6 >= b;
}

// console.log(possibleBonus(3, 7), true);
// console.log(possibleBonus(0, 6), true);
// console.log(possibleBonus(1, 6), true);
// console.log(possibleBonus(2, 6), true);
// console.log(possibleBonus(3, 6), true);
// console.log(possibleBonus(4, 6), true);
// console.log(possibleBonus(5, 6), true);
// console.log(possibleBonus(6, 6), false);
// console.log(possibleBonus(7, 6), false);
// console.log(possibleBonus(23, 27), true);
// console.log(possibleBonus(1, 9), false);
// console.log(possibleBonus(5, 3), false);

/**
    https://edabit.com/challenge/ALGbgMWLuEdrh22fB
 
    Right Shift by Division
    The right shift operation is similar to floor division by powers of two.

    Sample calculation using the right shift operator ( >> ):

    80 >> 3 = floor(80/2^3) = floor(80/8) = 10
    -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
    -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3

    Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

    Examples
    shiftToRight(80, 3) ➞ 10
    shiftToRight(-24, 2) ➞ -6
    shiftToRight(-5, 1) ➞ -3
    shiftToRight(4666, 6) ➞ 72
    shiftToRight(3777, 6) ➞ 59
    shiftToRight(-512, 10) ➞ -1

 */

function shiftToRight(x, y) {
  return Math.floor(x / 2 ** y);
}

// let [numVector, resVector] = [
//   [
//     [80, 3],
//     [-24, 2],
//     [-5, 1],
//     [38, 0],
//     [192, 4],
//     [4666, 6],
//     [3777, 6],
//     [1024, 5],
//     [-512, 10],
//   ],
//   [10, -6, -3, 38, 12, 72, 59, 32, -1],
// ];
// for (let i in numVector)
//   console.log(shiftToRight(...numVector[i]), resVector[i]);

/**
    https://edabit.com/challenge/WEvqZTFcHeYzFn74c 

    Perimeters with a Catch
    Write a function that takes a number and returns the perimeter of either a circle or a square.
     The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, 
     and the number will be the side of the square or the radius of the circle.

    Use the following formulas:

    Perimeter of a square: 4 * side.
    Perimeter of a circle: 6.28 * radius.
    The catch is you can only use arithmetic or comparison operators, which means:

    No if... else statements.
    No objects.
    No arrays.
    No formatting methods, etc.
    The goal is to write a short, branch-free piece of code.

    Examples
    perimeter("s", 7) ➞ 28
    perimeter("c", 4) ➞ 25.12
    perimeter("c", 9) ➞ 56.52
*/

function perimeter(l, num) {
  return l === "s" ? num * 4 : num * 6.28;
}

// console.log(perimeter("s", 1), 4);
// console.log(perimeter("s", 4), 16);
// console.log(perimeter("s", 9), 36);
// console.log(perimeter("s", 13), 52);
// console.log(perimeter("s", 30), 120);
// console.log(perimeter("c", 1), 6.28);
// console.log(perimeter("c", 4), 25.12);
// console.log(perimeter("c", 9), 56.52);
// console.log(perimeter("c", 13), 81.64);
// console.log(perimeter("c", 30), 188.4);

/**
    https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

    Burglary Series (04): Add its Name
    Given three arguments ⁠— an object obj of the stolen items, the pet's name 
    and a value ⁠— return an object with that name and value in it (as key-value pairs).

    Examples
    addName({}, "Brutus", 300) ➞ { Brutus: 300 }
    addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
    addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

 */

// function addName(obj, name, value) {
//   return { ...obj, [name]: value };
// }

// console.log(addName({}, "Brutus", 300), { Brutus: 300 });
// console.log(addName({ piano: 500 }, "Brutus", 400), {
//   piano: 500,
//   Brutus: 400,
// });
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440), {
//   piano: 500,
//   stereo: 300,
//   Caligula: 440,
// });

/**
    https://edabit.com/challenge/c8cLz2vX6NiBKRYmm

    Pronic Number
    A pronic number (or otherwise called as heteromecic) is a number which is a product of two consecutive integers, 
    that is, a number of the form n(n + 1). 
    Create a function that determines whether a number is pronic or not.

    Examples
    isHeteromecic(0) ➞ true
    // 0 * (0 + 1) = 0 * 1 = 0
    isHeteromecic(2) ➞ true
    // 1 * (1 + 1) = 1 * 2 = 2
    isHeteromecic(7) ➞ false
    isHeteromecic(110) ➞ true
    // 10 * (10 + 1) = 10 * 11 = 110
    isHeteromecic(136) ➞ false

isHeteromecic(156) ➞ true
 */

function isHeteromecic(n) {
  let total;
  let num1 = 0;
  while (n !== total) {
    total = num1 * (num1 + 1);
    num1++;
    if (total > n) {
      break;
    }
  }
  return total === n;
}

let [numVector, resVector] = [
  [0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600],
  [
    true,
    true,
    false,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    true,
  ],
];
for (let i in numVector) console.log(isHeteromecic(numVector[i]), resVector[i]);
