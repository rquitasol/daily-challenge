import TestModule from "./Test.js";
const Test = new TestModule();

/**
Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish.
 A number is Oddish if the sum of all of its digits is odd, and a number is Evenish 
 if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
 oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0 

 */

function oddishOrEvenish(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return Number(acc) + Number(curr);
    }) %
    2 ===
    1
    ? "Oddish"
    : "Evenish";
}

Test.assertEquals(oddishOrEvenish(43), "Oddish");
Test.assertEquals(oddishOrEvenish(373), "Oddish");
Test.assertEquals(oddishOrEvenish(55551), "Oddish");
Test.assertEquals(oddishOrEvenish(694), "Oddish");
Test.assertEquals(oddishOrEvenish(4433), "Evenish");
Test.assertEquals(oddishOrEvenish(11), "Evenish");
Test.assertEquals(oddishOrEvenish(211112), "Evenish");

/**
 Length of a Nested Array
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in 
the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5
 */

function getLength(arr) {
  return flatten(arr).length;
}

function flatten(arr) {
  let result = [];

  for (let n = 0; n < arr.length; n++) {
    if (Array.isArray(arr[n])) {
      result.push(...flatten(arr[n]));
    } else {
      result.push(arr[n]);
    }
  }
  return result;
}

Test.assertEquals(getLength([1, [2, 3]]), 3);
Test.assertEquals(getLength([1, [2, [3, 4]]]), 4);
Test.assertEquals(getLength([1, [2, [3, [4, [5, 6]]]]]), 6);
Test.assertEquals(getLength([1, 7, 8]), 3);
Test.assertEquals(getLength([2]), 1);
Test.assertEquals(getLength([2, [3], 4, [7]]), 4);
Test.assertEquals(getLength([2, [3, [5, 7]], 4, [7]]), 6);
Test.assertEquals(getLength([2, [3, [4, [5]]], [9]]), 5);
Test.assertEquals(getLength([]), 0);

/**
Numbers in Strings
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) ➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) ➞ ["test1"]
 */

function numInStr(arr) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const hasNumbersArr = arr.filter((val) => {
    const valArr = val.split("");
    const hasNumber = numbers.some((number) => {
      return valArr.includes(number);
    });
    return hasNumber;
  });
  return hasNumbersArr;
}

Test.assertSimilar(numInStr(["abc", "abc10"]), ["abc10"]);
Test.assertSimilar(numInStr(["abc", "ab10c", "a10bc", "bcd"]), [
  "ab10c",
  "a10bc",
]);
Test.assertSimilar(numInStr(["1", "a", " ", "b"]), ["1"]);
Test.assertSimilar(numInStr(["rct", "ABC", "Test", "xYz"]), []);
Test.assertSimilar(numInStr(["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"]), [
  "10xYZ",
  "xy2K77",
  "Z1K2W0",
]);
Test.assertSimilar(numInStr(["-/>", "10bc", "abc "]), ["10bc"]);
