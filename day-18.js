import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Add the Values of the Symbols in a Matrix
Write a function that takes an array of arrays and returns the value of all of the symbols in it, 
where each symbol adds or takes something from the total score. Symbol values:

# = 5
O = 3
X = 1
! = -1
!! = -3
!!! = -5
An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.
If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s 
and a X would be (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.

Examples
checkScore([
  ["#", "!"],
  ["!!", "X"]
]) ➞ 2

checkScore([
  ["!!!", "O", "!"],
  ["X", "#", "!!!"],
  ["!!", "X", "O"]
]) ➞ 0

 */

function checkScore(str) {
  const map = {
    "#": 5,
    O: 3,
    X: 1,
    "!": -1,
    "!!": -3,
    "!!!": -5,
  };

  const strArr = str.flat(1);

  return strArr.reduce((acc, curr) => {
    return (acc += map[curr]);
  }, 0);
}

Test.assertEquals(
  checkScore([
    ["#", "!"],
    ["!!", "X"],
  ]),
  2
);

Test.assertEquals(
  checkScore([
    ["!!!", "O", "!"],
    ["X", "#", "!!!"],
    ["!!", "X", "O"],
  ]),
  -1
);

Test.assertEquals(
  checkScore([
    ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
    [
      "!!!",
      "!!!",
      "!!",
      "!!",
      "!",
      "!",
      "X",
      "!",
      "!!!",
      "O",
      "!",
      "!!!",
      "X",
      "#",
    ],
    [
      "#",
      "X",
      "#",
      "!!!",
      "!",
      "!!",
      "#",
      "#",
      "!!",
      "X",
      "!!",
      "!!!",
      "X",
      "O",
    ],
    [
      "!!",
      "X",
      "!!",
      "!!",
      "!!!",
      "#",
      "O",
      "O",
      "!!!",
      "#",
      "O",
      "O",
      "#",
      "!!",
    ],
    ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
    [
      "!!",
      "!!!",
      "X",
      "!!!",
      "!!",
      "!!",
      "!!!",
      "X",
      "O",
      "!",
      "#",
      "!!",
      "!!",
      "!!!",
    ],
    [
      "!!",
      "!!",
      "#",
      "O",
      "!",
      "!!",
      "!",
      "!!!",
      "#",
      "O",
      "#",
      "!",
      "#",
      "!!",
    ],
    [
      "X",
      "X",
      "O",
      "X",
      "!!!",
      "#",
      "!!!",
      "!!!",
      "X",
      "X",
      "X",
      "!",
      "#",
      "!!",
    ],
    ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
    ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
    [
      "!",
      "!!",
      "!!",
      "O",
      "!!",
      "!!",
      "#",
      "#",
      "!",
      "!!!",
      "O",
      "!",
      "#",
      "#",
    ],
    [
      "!",
      "!!!",
      "!!",
      "X",
      "!!",
      "!!",
      "#",
      "!!!",
      "O",
      "!!",
      "!!!",
      "!",
      "!",
      "!",
    ],
    [
      "!!!",
      "!!!",
      "!!",
      "O",
      "!",
      "!",
      "!!!",
      "!!!",
      "!!",
      "!!",
      "X",
      "!",
      "#",
      "#",
    ],
    ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"],
  ]),
  12
);

/**
 All About Strings
Create a function that, given a string with at least three characters, returns an array of its:

Length.
First character.
Last character.
Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
Examples
allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]
allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]
allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]
 */

function allAboutStrings(str) {
  const length = str.length;
  const first = str.charAt(0);
  const last = str.charAt(length - 1);
  const middle =
    str.length % 2 === 0
      ? str.slice(length / 2 - 1, length / 2 + 1)
      : str.charAt(length / 2);
  const index = str.slice(2, length).indexOf(str[1]) + 2;

  const result = [
    length,
    first,
    last,
    middle,
    index === 1 ? "not found" : `@ index ${index}`,
  ];
  return result;
}

Test.assertSimilar(allAboutStrings("LASA"), [4, "L", "A", "AS", "@ index 3"]);
Test.assertSimilar(allAboutStrings("Computer"), [
  8,
  "C",
  "r",
  "pu",
  "not found",
]);
Test.assertSimilar(allAboutStrings("Science"), [7, "S", "e", "e", "@ index 5"]);
Test.assertSimilar(allAboutStrings("homework"), [
  8,
  "h",
  "k",
  "ew",
  "@ index 5",
]);
Test.assertSimilar(allAboutStrings("spring"), [6, "s", "g", "ri", "not found"]);
Test.assertSimilar(allAboutStrings("break"), [5, "b", "k", "e", "not found"]);
Test.assertSimilar(allAboutStrings("programming"), [
  11,
  "p",
  "g",
  "a",
  "@ index 4",
]);
Test.assertSimilar(allAboutStrings("bad"), [3, "b", "d", "a", "not found"]);
