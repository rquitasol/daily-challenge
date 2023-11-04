import TestModule from "./Test.js";
const Test = new TestModule();

/* 
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
*/

function countTrue(arr) {
  return arr.filter((bool) => bool === true).length;
}

Test.assertEquals(countTrue([true, false, false, true, false]), 2);
Test.assertEquals(countTrue([false, false, false, false]), 0);
Test.assertEquals(countTrue([]), 0);
Test.assertEquals(
  countTrue([
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
  ]),
  8
);
Test.assertEquals(
  countTrue([true, false, true, true, false, false, false, false, false]),
  3
);
Test.assertEquals(
  countTrue([
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  8
);
Test.assertEquals(
  countTrue([true, false, true, true, true, false, true, true, false, false]),
  6
);
Test.assertEquals(
  countTrue([
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
  ]),
  3
);
Test.assertEquals(
  countTrue([
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
  ]),
  3
);
Test.assertEquals(
  countTrue([true, true, false, true, false, false, false, false, true, false]),
  4
);
Test.assertEquals(
  countTrue([
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
  ]),
  9
);
Test.assertEquals(
  countTrue([
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
  ]),
  8
);
Test.assertEquals(
  countTrue([
    true,
    true,
    false,
    false,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    true,
  ]),
  6
);

/*
A Redundant Function
Write a function redundant that takes in a string str and returns a function that returns str.

Examples
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
const f3 = redundant("")
f3() ➞ ""
*/

function redundant(str) {
  return () => str;
}

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

Test.assertEquals(f1(), "apple");
Test.assertEquals(f2(), "pear");
Test.assertEquals(f3(), "");

/**
 Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. 
If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? 
Create a function that takes your position a and your friend's position b 
and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
 */

function possibleBonus(a, b) {
  if (b - a <= 0) return false;
  return b - a <= 6;
}

Test.assertEquals(possibleBonus(3, 7), true);
Test.assertEquals(possibleBonus(0, 6), true);
Test.assertEquals(possibleBonus(1, 6), true);
Test.assertEquals(possibleBonus(2, 6), true);
Test.assertEquals(possibleBonus(3, 6), true);
Test.assertEquals(possibleBonus(4, 6), true);
Test.assertEquals(possibleBonus(5, 6), true);
Test.assertEquals(possibleBonus(6, 6), false);
Test.assertEquals(possibleBonus(7, 6), false);
Test.assertEquals(possibleBonus(23, 27), true);
Test.assertEquals(possibleBonus(1, 9), false);
Test.assertEquals(possibleBonus(5, 3), false);
