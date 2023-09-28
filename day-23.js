import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Persistence
    The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
    The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
    Create two functions that take an integer as an argument and:

    Return its additive persistence.
    Return its multiplicative persistence.
    Examples: Additive Persistence
    additivePersistence(1679583) ➞ 3
    // 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
    // 3 + 9 = 12
    // 1 + 2 = 3
    // It takes 3 iterations to reach a single-digit number.

    additivePersistence(123456) ➞ 2
    // 1 + 2 + 3 + 4 + 5 + 6 = 21
    // 2 + 1 = 3

    additivePersistence(6) ➞ 0
    // Because 6 is already a single-digit integer.
    Examples: Multiplicative Persistence
    multiplicativePersistence(77) ➞ 4
    // 7 x 7 = 49
    // 4 x 9 = 36
    // 3 x 6 = 18
    // 1 x 8 = 8
    // It takes 4 iterations to reach a single-digit number.

    multiplicativePersistence(123456) ➞ 2
    // 1 x 2 x 3 x 4 x 5 x 6 = 720
    // 7 x 2 x 0 = 0

    multiplicativePersistence(4) ➞ 0
    // Because 4 is already a single-digit integer.
 */

function additivePersistence(n) {
  let recurs = 1;
  const arr = n.toString().split("");
  let total = arr.reduce((a, b) => Number(a) + Number(b), 0);

  if (n.toString().length === 1) {
    return 0;
  }

  if (total.toString().length > 1) {
    recurs += additivePersistence(total);
  }

  return recurs;
}

function multiplicativePersistence(n) {
  let recurs = 1;
  const arr = n.toString().split("");
  let total = arr.reduce((a, b) => Number(a) * Number(b), 1);

  if (n.toString().length === 1) {
    return 0;
  }

  if (total.toString().length > 1) {
    recurs += multiplicativePersistence(total);
  }
  return recurs;
}

// ADDITIVE PERSISTENCE
Test.assertEquals(additivePersistence(5), 0);
Test.assertEquals(additivePersistence(27), 1);
Test.assertEquals(additivePersistence(58), 2);
Test.assertEquals(additivePersistence(5789), 3);
// MULTIPLICATIVE PERSISTENCE
Test.assertEquals(multiplicativePersistence(7), 0);
Test.assertEquals(multiplicativePersistence(1234567890), 1);
Test.assertEquals(multiplicativePersistence(39), 3);
Test.assertEquals(multiplicativePersistence(6788), 6);
Test.assertEquals(multiplicativePersistence(277777788888899), 11);

/**
 Validating a Set in the Set Game
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
Examples
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
 */

function isSet(cards) {
  const map = {
    color: new Set(),
    number: new Set(),
    shade: new Set(),
    shape: new Set(),
  };
  cards.forEach((card) => {
    const { color, number, shade, shape } = card;
    map.color.add(color);
    map.number.add(number);
    map.shade.add(shade);
    map.shape.add(shape);
  });

  for (const prop in map) {
    if (map[prop].size === 2) {
      return false;
    }
  }

  return true;
}

Test.assertEquals(
  isSet([
    { color: "red", number: 1, shade: "lined", shape: "squiggle" },
    { color: "red", number: 1, shade: "lined", shape: "diamond" },
    { color: "red", number: 1, shade: "lined", shape: "squiggle" },
  ]),
  false
);

Test.assertEquals(
  isSet([
    { color: "red", number: 1, shade: "lined", shape: "squiggle" },
    { color: "red", number: 1, shade: "lined", shape: "diamond" },
    { color: "red", number: 1, shade: "lined", shape: "oval" },
  ]),
  true
);

Test.assertEquals(
  isSet([
    { color: "red", number: 1, shade: "empty", shape: "squiggle" },
    { color: "red", number: 1, shade: "lined", shape: "diamond" },
    { color: "red", number: 1, shade: "lined", shape: "oval" },
  ]),
  false
);

Test.assertEquals(
  isSet([
    { color: "red", number: 1, shade: "empty", shape: "squiggle" },
    { color: "red", number: 2, shade: "lined", shape: "diamond" },
    { color: "red", number: 3, shade: "full", shape: "oval" },
  ]),
  true
);

Test.assertEquals(
  isSet([
    { color: "green", number: 1, shade: "empty", shape: "squiggle" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
    { color: "green", number: 3, shade: "empty", shape: "oval" },
  ]),
  true
);

Test.assertEquals(
  isSet([
    { color: "purple", number: 1, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 1, shade: "full", shape: "oval" },
  ]),
  true
);

Test.assertEquals(
  isSet([
    { color: "purple", number: 3, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 3, shade: "full", shape: "oval" },
  ]),
  false
);

Test.assertEquals(
  isSet([
    { color: "red", number: 1, shade: "empty", shape: "squiggle" },
    { color: "red", number: 2, shade: "lined", shape: "diamond" },
    { color: "purple", number: 3, shade: "full", shape: "oval" },
  ]),
  false
);
