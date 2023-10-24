import TestModule from "./Test.js";
const Test = new TestModule();

/**
 
Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"
giveMeSomething("Bob Jane") ➞ "something Bob Jane"
giveMeSomething("something") ➞ "something something"
 */

function giveMeSomething(a) {
  return "something ".concat(a);
}

Test.assertEquals(giveMeSomething("a"), "something a");
Test.assertEquals(giveMeSomething("is cooking"), "something is cooking");
Test.assertEquals(giveMeSomething(" is cooking"), "something  is cooking");

/**
 
Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []
 */

function toArray(obj) {
  return Object.entries(obj);
}

Test.assertSimilar(toArray({ a: 1, b: 2 }), [
  ["a", 1],
  ["b", 2],
]);
Test.assertSimilar(toArray({ foo: 33, bar: 45, baz: 67 }), [
  ["foo", 33],
  ["bar", 45],
  ["baz", 67],
]);
Test.assertSimilar(toArray({ shrimp: 15, tots: 12 }), [
  ["shrimp", 15],
  ["tots", 12],
]);
Test.assertSimilar(toArray({}), []);

/**
 Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
 */

function concat(...args) {
  return [].concat(...args);
}

Test.assertSimilar(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7]);
Test.assertSimilar(
  concat([1], [2], [3], [4], [5], [6], [7]),
  [1, 2, 3, 4, 5, 6, 7]
);
Test.assertSimilar(concat([1, 2], [3, 4]), [1, 2, 3, 4]);
Test.assertSimilar(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4]);
Test.assertSimilar(concat(["a"], ["b", "c"]), ["a", "b", "c"]);

/**
 Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 */

function arrayOfMultiples(num, length) {
  const result = [];
  for (let n = 1; n < length; n++) {
    result.push(n * num);
  }
  return result;
}

Test.assertSimilar(arrayOfMultiples(7, 5), [7, 14, 21, 28, 35]);
Test.assertSimilar(
  arrayOfMultiples(12, 10),
  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
);
Test.assertSimilar(arrayOfMultiples(17, 7), [17, 34, 51, 68, 85, 102, 119]);
Test.assertSimilar(
  arrayOfMultiples(630, 14),
  [
    630, 1260, 1890, 2520, 3150, 3780, 4410, 5040, 5670, 6300, 6930, 7560, 8190,
    8820,
  ]
);
Test.assertSimilar(arrayOfMultiples(140, 3), [140, 280, 420]);
Test.assertSimilar(arrayOfMultiples(7, 8), [7, 14, 21, 28, 35, 42, 49, 56]);
Test.assertSimilar(
  arrayOfMultiples(11, 21),
  [
    11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187,
    198, 209, 220, 231,
  ]
);
