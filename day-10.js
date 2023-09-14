import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Histogram Function
    Build a function that creates histograms. Every bar needs to be on a new line and its length
     corresponds to the numbers in the array passed as an argument. 
     The second argument of the function represents the character to be used for the bar.

    histogram(arr, char) ➞ str
    Examples
    histogram([1, 3, 4], "#") ➞ "#\n###\n####"
    #
    ###
    ####
    histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="
    ======
    ==
    ===============
    ===
    histogram([1, 10], "+") ➞ "+\n++++++++++"
    +
    ++++++++++
 */

function histogram(arr, char) {
  return arr
    .map((num) => {
      let str = "";
      while (num !== 0) {
        str += char;
        num--;
      }
      return str;
    })
    .join("\n");
}

Test.assertEquals(histogram([2, 4, 5, 6], "o"), "oo\noooo\nooooo\noooooo");
Test.assertEquals(histogram([4, 2], "*"), "****\n**");
Test.assertEquals(
  histogram([20, 1, 12], "H"),
  "HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH"
);
Test.assertEquals(
  histogram([2, 1, 2, 4, 5, 2, 3], "#"),
  "##\n#\n##\n####\n#####\n##\n###"
);

/**
     Disarium Number
    A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
    Create a function that determines whether a number is a Disarium or not.

    Examples
    isDisarium(75) ➞ false
    // 7^1 + 5^2 = 7 + 25 = 32
    isDisarium(135) ➞ true
    // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
    isDisarium(544) ➞ false
    isDisarium(518) ➞ true
    isDisarium(8) ➞ true
    isDisarium(466) ➞ false
 */

function isDisarium(n) {
  return (
    n
      .toString()
      .split("")
      .reduce((acc, curr, idx) => {
        return Number(acc) + Number(curr) ** (idx + 1);
      }, 0) === n
  );
}

let [numVector, resVector] = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [true, false, true, false, false, true, true, false, false, true, true, true],
];
for (let i in numVector)
  Test.assertEquals(isDisarium(numVector[i]), resVector[i]);

/**
    Burglary Series (12): Get Vodka Bottle
    The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

    Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

    Examples
    { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
    // number = 100
    { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
    // number = 50
    { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
    // number = 70
*/
function getVodkaBottle(obj, num) {
  let str = "";
  for (const key in obj) {
    if (key.includes("Rammstein") && num.toFixed(2) === obj[key].toFixed(2)) {
      str = key;
    }
  }
  return str;
}

const random = Math.random();
const obj = {
  absinth: 100,
  whiskey: 100,
  "Rammstein A": 100,
  "Rammstein B": 50,
  "Rammstein C": random,
};

Test.assertEquals(getVodkaBottle(obj, 100), "Rammstein A");
Test.assertEquals(getVodkaBottle(obj, 50), "Rammstein B");
Test.assertEquals(getVodkaBottle(obj, random), "Rammstein C");
