import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Frequency by Level of Nesting
Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.

Examples
freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
➞ [[0, 1], [1, 2], [2, 3]]
// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.
freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
➞ [[0, 3], [1, 4], [2, 0]]
freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]
 */

function freqCount(arr, el) {
  let result = [];

  let level = 0;
  function countElements(arr, el) {
    let map = {};
    for (let n = 0; n < arr.length; n++) {
      if (arr[n] === el) {
        if (map.hasOwnProperty(level)) {
          map[level] += 1;
        } else {
          map[level] = 1;
        }
      } else if (Array.isArray(arr[n])) {
        level++;
        countElements(arr[n], el);
      }
    }
    for (const key in map) {
      result.push([Number(key), map[key]]);
    }
  }
  if (result.length === 0) countElements(arr, el);

  return result.sort((a, b) => a[0] - b[0]);
}

Test.assertSimilar(freqCount([1, 1, 1, 1], 1), [[0, 4]]);
Test.assertSimilar(freqCount([1, 1, 2, 2], 1), [[0, 2]]);
Test.assertSimilar(freqCount([1, 1, 2, [1]], 1), [
  [0, 2],
  [1, 1],
]);
Test.assertSimilar(freqCount([1, 1, 2, [[1]]], 1), [
  [0, 2],
  [1, 0],
  [2, 1],
]);
Test.assertSimilar(freqCount([[[1]]], 1), [
  [0, 0],
  [1, 0],
  [2, 1],
]);
Test.assertSimilar(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1), [
  [0, 1],
  [1, 2],
  [2, 3],
]);
Test.assertSimilar(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5), [
  [0, 3],
  [1, 4],
  [2, 0],
]);
Test.assertSimilar(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2), [
  [0, 0],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
]);
