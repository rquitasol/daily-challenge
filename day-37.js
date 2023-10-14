import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Count the Countdown Sequences
A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the number of countdown sequences in the given array and y is the array of those sequences in the order in which they appear in the array.

Examples
finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
// 1 countdown sequence: 3, 2, 1

finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// 2 countdown sequences:
// 5, 4, 3, 2, 1 and 3, 2, 1

finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// 3 countdown sequences:
// 4, 3, 2, 1 ; 3, 2, 1 and 1

finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]

finalCountdown([]) ➞  [0, []]
 */
function finalCountdown(arr) {
  let count = 0;
  let sequences = [];
  let currentSequence = [];

  for (let num of arr) {
    if (num === 1) {
      currentSequence.push(1);
      if (currentSequence.length > 1) {
        sequences.push(currentSequence.slice());
        count++;
      }
      currentSequence = [];
    } else if (num === currentSequence[currentSequence.length - 1] - 1) {
      currentSequence.push(num);
    } else {
      currentSequence = [num];
    }
  }

  return [count, sequences];
}

Test.assertSimilar(finalCountdown([5, 4, 3, 2, 1]), [1, [[5, 4, 3, 2, 1]]]);
Test.assertSimilar(finalCountdown([2, 5, 4, 3, 2, 1, 2]), [
  1,
  [[5, 4, 3, 2, 1]],
]);
Test.assertSimilar(finalCountdown([2, 3, 2, 1, 4, 3, 2, 1]), [
  2,
  [
    [3, 2, 1],
    [4, 3, 2, 1],
  ],
]);
Test.assertSimilar(finalCountdown([4, 3, 2, 5, 4, 3]), [0, []]);
Test.assertSimilar(finalCountdown([4, 3, 2, 5, 4, 3, 1]), [1, [[1]]]);
Test.assertSimilar(finalCountdown([3, 2, 1, 5, 5, 3, 2, 1, 5, 5]), [
  2,
  [
    [3, 2, 1],
    [3, 2, 1],
  ],
]);
Test.assertSimilar(finalCountdown([4, 8, 3, 2, 1, 2]), [1, [[3, 2, 1]]]);
Test.assertSimilar(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]), [
  2,
  [
    [5, 4, 3, 2, 1],
    [3, 2, 1],
  ],
]);
