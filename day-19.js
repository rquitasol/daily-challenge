import TestModule from "./Test.js";
const Test = new TestModule();

/**
     Finding Common Elements
    Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

    Examples
    commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
    commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
    commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]
    commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
 */

function commonElements(arr1, arr2) {
  const resultArr = arr1.filter((val) => {
    if (arr2.includes(val)) {
      return val;
    }
  });
  return resultArr;
}

Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]), [3]);
Test.assertSimilar(
  commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]),
  [1, 3, 4, 7]
);
Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], []), []);
Test.assertSimilar(
  commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]),
  [1, 2, 4, 5]
);
Test.assertSimilar(commonElements([-1, 3, 4, 6, 7, 9], [100, 300, 900]), []);
Test.assertSimilar(
  commonElements(
    [
      18, 30, 60, 77, 89, 103, 107, 139, 149, 150, 201, 204, 233, 248, 250, 264,
      273, 297, 308, 310, 319, 320, 348, 349, 353, 362, 365, 368, 376, 381, 395,
      401, 405, 416, 421, 424, 434, 444, 452, 454, 464, 478, 497, 511, 513, 523,
      533, 551, 562, 565, 593, 602, 604, 609, 610, 614, 620, 624, 643, 645, 654,
      660, 674, 674, 685, 686, 700, 704, 712, 723, 728, 735, 741, 760, 765, 775,
      776, 781, 787, 788, 791, 806, 823, 842, 848, 849, 901, 904, 909, 911, 916,
      931, 932, 932, 940, 950, 951, 959, 973, 993,
    ],
    [
      3, 13, 25, 25, 27, 32, 39, 40, 45, 53, 55, 57, 60, 67, 78, 80, 81, 86,
      114, 116, 125, 130, 146, 159, 164, 174, 192, 193, 209, 211, 265, 275, 279,
      298, 303, 303, 314, 327, 330, 337, 355, 356, 375, 386, 405, 449, 452, 454,
      457, 470, 476, 496, 499, 500, 501, 504, 516, 547, 577, 603, 604, 613, 618,
      628, 638, 652, 659, 677, 683, 685, 700, 701, 710, 713, 727, 728, 734, 740,
      774, 780, 790, 797, 833, 834, 837, 863, 869, 875, 885, 910, 911, 928, 930,
      938, 943, 959, 964, 969, 987, 994,
    ]
  ),
  [60, 405, 452, 454, 604, 685, 700, 728, 911, 959]
);

/**
     Hours Passed
    Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.

    Examples
    hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"
    hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"
    hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"
 */

function hoursPassed(t1, t2) {
  const hour1 =
    (t1.split(":")[0] === "12" ? 0 : Number(t1.split(":")[0])) +
    (t1.split(" ")[1] === "PM" ? 12 : 0);
  const hour2 =
    (t2.split(":")[0] === "12" ? 0 : Number(t2.split(":")[0])) +
    (t2.split(" ")[1] === "PM" ? 12 : 0);

  const timePassed = hour2 - hour1;
  return timePassed === 0 ? "No time has passed." : `${timePassed} hours`;
}

let [strVector, resVector] = [
  [
    ["3:00 AM", "9:00 AM"],
    ["2:00 PM", "4:00 PM"],
    ["1:00 AM", "3:00 PM"],
    ["2:00 AM", "3:00 PM"],
    ["8:00 AM", "8:00 PM"],
    ["12:00 AM", "10:00 PM"],
    ["1:00 AM", "1:00 AM"],
    ["12:00 PM", "12:00 PM"],
  ],
  [
    "6 hours",
    "2 hours",
    "14 hours",
    "13 hours",
    "12 hours",
    "22 hours",
    "No time has passed.",
    "No time has passed.",
  ],
];
for (let i in strVector)
  Test.assertSimilar(hoursPassed(...strVector[i]), resVector[i]);

/**
    Two Distinct Elements
    In each input array, every number repeats at least once, except for two. 
    Write a function that returns the two unique numbers.

    Examples
    returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]
    returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]
    returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
*/

function returnUnique(arr) {
  // Create an empty object to store the counts and indices of each number
  const counts = {};
  const indices = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    indices[num] = i;
  }

  const uniqueNumbers = [];

  for (const num in counts) {
    if (counts[num] === 1) {
      uniqueNumbers[indices[num]] = Number(num);
    }
  }

  return uniqueNumbers;
}

Test.assertSimilar(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]), [9, 7]);
Test.assertSimilar(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]), [2, 1]);
Test.assertSimilar(
  returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]),
  [5, 6]
);
Test.assertSimilar(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4]), [3, 2]);
Test.assertSimilar(
  returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66]),
  [2, 0]
);
Test.assertSimilar(returnUnique([-9, -9, -9, 7, -9, -9, 1]), [7, 1]);
Test.assertSimilar(
  returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3]),
  [-19, 4]
);
