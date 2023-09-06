/**
    Add up the Numbers from a Single Number
    Create a function that takes a number as an argument. 
    Add up all the numbers from 1 to the number you passed to the function. For example, 
    if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

    Examples
    addUp(4) ➞ 10
    addUp(13) ➞ 91
    addUp(600) ➞ 180300
 */

function addUp(num) {
  let result = 0;
  for (let n = 0; n < num + 1; n++) result += n;
  return result;
}

// console.log(addUp(4)); // 10
// console.log(addUp(13)); //91
// console.log(addUp(600)); //180300

/**
    Matchstick Houses
    This challenge will help you interpret mathematical relationships both algebraically and geometrically.

    Matchstick Houses, Steps 1, 2 and 3

    Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

    Examples
    matchHouses(1) ➞ 6
    matchHouses(4) ➞ 21
    matchHouses(87) ➞ 436
*/

function matchHouses(step) {
  //Initial match house is 6 sticks then succedding only need 5;
  if (step === 0) {
    return 0;
  }
  let matchHouse = 6;

  for (let n = 0; n < step - 1; n++) {
    matchHouse += 5;
  }
  return matchHouse;
}

// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(87));

/**
     Left Shift by Powers of Two
    The left shift operation is similar to multiplication by powers of two.

    Sample calculation using the left shift operator (<<):

    10 << 3 = 10 * 2^3 = 10 * 8 = 80
    -32 << 2 = -32 * 2^2 = -32 * 4 = -128
    5 << 2 = 5 * 2^2 = 5 * 4 = 20
    Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

    Examples
    shiftToLeft(5, 2) ➞ 20
    shiftToLeft(10, 3) ➞ 80
    shiftToLeft(-32, 2) ➞ -128
    shiftToLeft(-6, 5) ➞ -192
    shiftToLeft(12, 4) ➞ 192
    shiftToLeft(46, 6) ➞ 2944

 */

function shiftToLeft(x, y) {
  return x * 2 ** y;
}

// console.log(shiftToLeft(5, 2));
// console.log(shiftToLeft(10, 3));
// console.log(shiftToLeft(-32, 2));
// console.log(shiftToLeft(-6, 5));
// console.log(shiftToLeft(12, 4));
// console.log(shiftToLeft(46, 6));

/**
 Find the Smallest and Biggest Numbers
    Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

    Examples
    minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
    minMax([2334454, 5]) ➞ [5, 2334454]
    minMax([1]) ➞ [1, 1]
 */

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
// console.log(minMax([2334454, 5])); // [5, 2334454]
// console.log(minMax([1])); //[1, 1

/**
    Is it Time for Milk and Cookies?
    Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
    Create a function that accepts a Date object and returns true if 
    it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based,
    meaning December is the 11th month while January is 0.

    Examples
    timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
    timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
    timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
 */

function timeForMilkAndCookies(date) {
  return date.getUTCMonth() === 11 && date.getDate() === 24;
}

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true

/**
 
    Which Function Returns the Larger Number?
    Your function will be passed two functions, f and g, that don't take any parameters. 
    Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither.

    Examples
    whichIsLarger(() => 5, () => 10) ➞ "g"
    whichIsLarger(() => 25,  () => 25) ➞ "neither"
    whichIsLarger(() => 505050, () => 5050) ➞ "f"

 */

function whichIsLarger(f, g) {
  const resultF = f();
  const resultG = g();
  if (resultF > resultG) {
    return "f";
  } else if (resultF < resultG) {
    return "g";
  } else if (resultF === resultG) {
    return "neither";
  }
}

// console.log(
//   whichIsLarger(
//     () => 5,
//     () => 10
//   )
// ); // "g"
// console.log(
//   whichIsLarger(
//     () => 25,
//     () => 25
//   )
// ); // "neither"
// console.log(
//   whichIsLarger(
//     () => 505050,
//     () => 5050
//   )
// ); // "f"

/**
    Convert a Number to Base-2
    Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
    To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

    Going from right to left, the value of the most right bit is 1, 
    now from that every bit to the left will be x2 the value, 
    value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

    Examples
    binary(1) ➞ "1"
    // 1*1 = 1
    binary(5) ➞ "101"
    // 1*1 + 1*4 = 5

    binary(10) ➞ "1010"
    // 1*2 + 1*8 = 10
*/

function binary(decimal) {
  return decimal.toString(2);
}

console.log(binary(10));
