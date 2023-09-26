import TestModule from "./Test.js";
const Test = new TestModule();

/**
     Get Notes Distribution
    Create a function that takes an array of students and returns an object representing their notes distribution.
    Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

    Example
    getNotesDistribution([
    {
        "name": "Steve",
        "notes": [5, 5, 3, -1, 6]
    },
    {
        "name": "John",
        "notes": [3, 2, 5, 0, -3]
    }
    ] ➞ {
    5: 3,
    3: 2,
    2: 1
    })
 */

function getNotesDistribution(students) {
  let result = {};
  const validNotes = [1, 2, 3, 4, 5];
  Object.entries(students).forEach((obj) => {
    const [key, { name, notes }] = obj;
    notes.forEach((note) => {
      if (validNotes.includes(note)) {
        if (result.hasOwnProperty(note)) {
          result[note] += 1;
        } else {
          result[note] = 1;
        }
      }
    });
  });
  return result;
}

Test.assertSimilar(
  getNotesDistribution([
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ]),
  {
    5: 3,
    3: 2,
    2: 1,
  }
);

/**
     Mutations Only: Zeroes to the End
    Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

    Examples
    zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]
    zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]
    zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]
    zeroesToEnd([0, 0]) ➞ [0, 0]
 */

function zeroesToEnd(a) {
  a.sort((num1, num2) => {
    return num2 === 0 ? -1 : 1;
  });
  return a;
}

Test.assertSimilar(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]), [1, 2, 4, 5, 0, 0, 0]);
Test.assertSimilar(zeroesToEnd([0, 0, 1, 3]), [1, 3, 0, 0]);
Test.assertSimilar(zeroesToEnd([0, 0, 2, 0, 5]), [2, 5, 0, 0, 0]);
Test.assertSimilar(zeroesToEnd([4, 4, 5]), [4, 4, 5]);
Test.assertSimilar(zeroesToEnd([0, 0]), [0, 0]);
