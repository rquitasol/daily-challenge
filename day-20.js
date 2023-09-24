import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Even vs. Odds
Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.
A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

For instance:
[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...
[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

For instance:
[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).
Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).
Given an array, calculate the number of liked spots.

Examples
availableSpots([0, 4, 6, 8], 9) ➞ 0
// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.
availableSpots([0, 4, 6, 8], 12) ➞ 3
// 12 likes ALL of the spots.
availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
// 7 dislikes every spot except the last one at: [4, __, 5].
availableSpots([4, 4], 8) ➞ 1
 */

function availableSpots(arr, num) {
  let likedSpots = 0;

  const isEven = (number) => {
    return number % 2 === 0;
  };

  if (isEven(num)) {
    arr.forEach((val, idx) => {
      const nextVal = arr[idx + 1];
      if (nextVal) {
        if (!(!isEven(val) && !isEven(nextVal))) {
          likedSpots += 1;
        }
      }
    });
  } else {
    arr.forEach((val, idx) => {
      const nextVal = arr[idx + 1];
      if (nextVal) {
        if (!(isEven(val) && isEven(nextVal))) {
          likedSpots += 1;
        }
      }
    });
  }

  return likedSpots;
}

Test.assertEquals(availableSpots([0, 4, 6, 8], 9), 0);
Test.assertEquals(availableSpots([0, 4, 6, 8], 6), 3);
Test.assertEquals(availableSpots([1, 2, 3, 4], 6), 3);
Test.assertEquals(availableSpots([1, 2, 3, 4], 5), 3);
Test.assertEquals(availableSpots([1, 1, 1, 4], 7), 3);
Test.assertEquals(availableSpots([1, 1, 4, 4], 7), 2);
Test.assertEquals(availableSpots([1, 4, 4, 4], 7), 1);
Test.assertEquals(availableSpots([4, 4, 4, 4], 7), 0);
Test.assertEquals(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32), 3);
Test.assertEquals(availableSpots([4, 4], 8), 1);

/**
 Does the Triangle Fit into the Triangular Hole?
Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
Notes
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.
 */

function doesTriangleFit(brick, hole) {
  const sortedHole = hole.sort((a, b) => a - b);
  const isTriangle =
    brick[0] + brick[1] > brick[2] &&
    brick[2] + brick[1] > brick[0] &&
    brick[0] + brick[2] > brick[1];
  const canFit = isTriangle
    ? brick.every((side, idx) => side <= sortedHole[idx])
    : false;
  return canFit;
}

Test.assertEquals(doesTriangleFit([1, 1, 1], [1, 1, 1]), true, "Same triangle");
Test.assertEquals(
  doesTriangleFit([1, 1, 1], [2, 2, 2]),
  true,
  "Smaller triangle"
);
Test.assertEquals(
  doesTriangleFit([1, 6, 8], [1, 6, 8]),
  false,
  "Not a triangle"
);
Test.assertEquals(
  doesTriangleFit([12, 63, 42], [1, 6, 8]),
  false,
  "too small hole"
);
Test.assertEquals(
  doesTriangleFit([3, 6, 8], [23, 63, 42]),
  true,
  "Hole is too big"
);
Test.assertEquals(
  doesTriangleFit([3, 6, 8], [1, 10, 8]),
  false,
  "impossible hole"
);
