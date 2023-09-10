import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Combinations
    Create a function that takes a variable number of arguments, each argument representing the number of items in a group. 
    The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

    Examples
    combinations(2, 3) ➞ 6
    combinations(3, 7, 4) ➞ 84
    combinations(2, 3, 4, 5) ➞ 120
 */

function combinations(items) {
  const itemArr = Object.values(arguments);
  return itemArr.filter((val) => val !== 0).reduce((acc, curr) => acc * curr);
}

Test.assertEquals(combinations(2), 2);
Test.assertEquals(combinations(2, 3), 6);
Test.assertEquals(combinations(3, 5), 15);
Test.assertEquals(combinations(5, 6, 7), 210);
Test.assertEquals(combinations(5, 5, 5, 5), 625);
Test.assertEquals(combinations(3, 6, 9), 162);
Test.assertEquals(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800);
Test.assertEquals(combinations(4, 5, 6), 120);
Test.assertEquals(combinations(5, 6, 7, 8), 1680);
Test.assertEquals(combinations(6, 7, 0), 42);

/**
    An Ordered Matrix
    Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. 
    Your function needs to create an a × b matrix. a is the first argument and b is the second.

    Examples
    orderedMatrix(5, 5) ➞ [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
    ]

    orderedMatrix(1, 1) ➞ [[1]]
    orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]]
 */

function orderedMatrix(a, b) {
  let result = [];
  let idx = 1;
  for (let x = 0; x < a; x++) {
    const arr = [];
    for (let y = 0; y < b; y++) {
      arr.push(idx++);
    }
    result.push(arr);
  }
  return result;
}

Test.assertSimilar(orderedMatrix(1, 2), [[1, 2]]);
Test.assertSimilar(orderedMatrix(3, 3), [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
Test.assertSimilar(orderedMatrix(5, 5), [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
Test.assertSimilar(orderedMatrix(3, 4), [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

/**
    Positive Dominant
    An array is positive dominant if it contains strictly more unique positive values than unique negative values. 
    Write a function that returns true if an array is positive dominant.

    Examples
    isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
    // There is only 1 unique positive value (1).
    // There are 2 unique negative values (-3, -4).
    isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
    isPositiveDominant([5, 0]) ➞ true
    isPositiveDominant([0, -4, -1]) ➞ false
    Notes
 */

function isPositiveDominant(a) {
  const filteredArr = Array.from(new Set(a)).filter((num) => num !== 0);
  let positive = 0;
  let negative = 0;

  filteredArr.forEach((num) => (num > 0 ? positive++ : negative++));

  return positive > negative;
}

Test.assertEquals(isPositiveDominant([1, 1, 1, 1, -3, -4]), false);
Test.assertEquals(isPositiveDominant([5, 99, 832, -3, -4]), true);
Test.assertEquals(isPositiveDominant([5, 0]), true);
Test.assertEquals(isPositiveDominant([0, -4, -1]), false);
Test.assertEquals(isPositiveDominant([1, 2, 3, -1]), true);
Test.assertEquals(isPositiveDominant([1, 0, 0, -1]), false);
Test.assertEquals(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), true);
Test.assertEquals(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]), false);
Test.assertEquals(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]), false);

/**
 Check If the Brick Fits through the Hole
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) 
and returns true if this brick can fit into a hole with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 2, 1, 1) ➞ false

Notes
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
You can't put a brick in at a non-orthogonal angle.
 */

// (a,b,c) -- dimensions of the brick
// (w,h) -- dimensions of the hole
function doesBrickFit(a, b, c, w, h) {
  let hole = [w, h];
  let brick = [a, b, c];

  console.log(a, b, c, w, h);
  return !brick.some((side) => hole.indexOf(side) == -1);
}

Test.assertEquals(doesBrickFit(1, 1, 1, 1, 1), true, "cube into square");
Test.assertEquals(doesBrickFit(1, 2, 1, 1, 1), true);
Test.assertEquals(doesBrickFit(1, 2, 2, 1, 1), false);
Test.assertEquals(doesBrickFit(1, 2, 2, 1, 2), true);
Test.assertEquals(doesBrickFit(1, 2, 2, 2, 1), true);
Test.assertEquals(doesBrickFit(2, 2, 2, 1, 2), false);
