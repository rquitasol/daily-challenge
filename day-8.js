import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Switching Between Pencils
When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.
Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

It takes 1 second to switch between pencils.
It takes 2 seconds to color a square.
See the example below for clarification.

color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
Examples
colorPatternTimes(["Blue"]) ➞ 2
colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

 */

function colorPatternTimes(cols) {
  const colorBox = cols.length * 2;
  let prevColor = "";
  let totalSwitch = -1;
  cols.forEach((color) => {
    if (prevColor !== color) {
      totalSwitch += 1;
    }
    prevColor = color;
  });

  return colorBox + totalSwitch;
}

Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Red",
    "Red",
    "Yellow",
    "Green",
    "Green",
    "Green",
    "Red",
    "Blue",
    "Yellow",
    "Blue",
    "Green",
    "Green",
    "Red",
    "Red",
    "Red",
    "Blue",
    "Green",
    "Red",
    "Blue",
    "Blue",
    "Red",
    "Blue",
  ]),
  70
);
Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Blue",
    "Yellow",
    "Blue",
    "Green",
    "Green",
    "Yellow",
    "Green",
    "Blue",
    "Blue",
    "Blue",
    "Red",
    "Blue",
    "Red",
    "Green",
    "Red",
  ]),
  44
);
Test.assertEquals(colorPatternTimes(["Yellow", "Green", "Blue"]), 8);
Test.assertEquals(
  colorPatternTimes([
    "Green",
    "Green",
    "Red",
    "Green",
    "Yellow",
    "Red",
    "Red",
    "Green",
    "Red",
    "Green",
  ]),
  27
);
Test.assertEquals(colorPatternTimes(["Red"]), 2);
Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Red",
    "Blue",
    "Red",
    "Green",
    "Red",
    "Blue",
    "Green",
    "Green",
    "Yellow",
    "Red",
  ]),
  30
);
Test.assertEquals(
  colorPatternTimes([
    "Green",
    "Green",
    "Blue",
    "Red",
    "Red",
    "Blue",
    "Yellow",
    "Red",
    "Red",
    "Green",
    "Yellow",
    "Red",
    "Yellow",
    "Red",
    "Green",
    "Yellow",
    "Red",
    "Green",
    "Yellow",
    "Blue",
    "Yellow",
    "Red",
    "Green",
    "Green",
    "Blue",
    "Yellow",
    "Green",
    "Green",
    "Green",
    "Blue",
  ]),
  83
);
Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Blue",
    "Red",
    "Blue",
    "Green",
    "Blue",
    "Yellow",
    "Blue",
    "Yellow",
    "Yellow",
    "Yellow",
    "Red",
  ]),
  33
);
Test.assertEquals(
  colorPatternTimes(["Yellow", "Green", "Yellow", "Yellow"]),
  10
);
Test.assertEquals(
  colorPatternTimes([
    "Blue",
    "Blue",
    "Yellow",
    "Green",
    "Green",
    "Red",
    "Blue",
    "Yellow",
    "Red",
    "Yellow",
    "Green",
    "Red",
    "Yellow",
    "Green",
    "Yellow",
    "Blue",
    "Yellow",
    "Green",
    "Green",
    "Blue",
  ]),
  56
);
Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Blue",
    "Yellow",
    "Blue",
    "Green",
    "Yellow",
    "Yellow",
    "Yellow",
    "Yellow",
    "Red",
    "Red",
    "Yellow",
    "Yellow",
  ]),
  33
);
Test.assertEquals(colorPatternTimes(["Blue", "Red", "Red"]), 7);
Test.assertEquals(
  colorPatternTimes([
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Blue",
    "Yellow",
    "Blue",
    "Yellow",
    "Red",
    "Green",
    "Green",
    "Blue",
    "Blue",
    "Green",
    "Green",
    "Red",
    "Green",
    "Red",
    "Green",
    "Red",
    "Red",
    "Green",
    "Red",
    "Red",
    "Green",
    "Red",
    "Blue",
    "Yellow",
    "Red",
    "Red",
  ]),
  83
);

/**
    Layers in a Rug
    Write a function that counts how many concentric layers a rug has.

    Examples
    countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
    ]) ➞ 2

    countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
    ]) ➞ 3

    countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
    ]) ➞ 5
 */

function countLayers(rug) {
  return new Set(rug).size;
}

Test.assertEquals(countLayers(["AAA"]), 1);

Test.assertEquals(countLayers(["AAAA", "AAAA", "AAAA"]), 1);

Test.assertEquals(countLayers(["AAAA", "ABBA", "AAAA"]), 2);

Test.assertEquals(
  countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBBBBBBA",
    "ABBBBBBBA",
    "AAAAAAAAA",
  ]),
  2
);

Test.assertEquals(
  countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA",
  ]),
  3
);

Test.assertEquals(
  countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABCCCCCBA",
    "ABBBBBBBA",
    "AAAAAAAAA",
  ]),
  3
);

Test.assertEquals(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ]),
  5
);

Test.assertEquals(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCABACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ]),
  5
);

Test.assertEquals(
  countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCDDDCBAA",
    "AABCDDDCBAA",
    "AABCDDDCBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA",
  ]),
  4
);

Test.assertEquals(
  countLayers([
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
    "FFFFGGGGGGGGGGGGGGGGGFFFF",
    "FFFFGGGAAAAAAAAAAAGGGFFFF",
    "FFFFGGGAABBBBBBBAAGGGFFFF",
    "FFFFGGGAABCCCCCBAAGGGFFFF",
    "FFFFGGGAABCDDDCBAAGGGFFFF",
    "FFFFGGGAABCDDDCBAAGGGFFFF",
    "FFFFGGGAABCDDDCBAAGGGFFFF",
    "FFFFGGGAABCCCCCBAAGGGFFFF",
    "FFFFGGGAABBBBBBBAAGGGFFFF",
    "FFFFGGGAAAAAAAAAAAGGGFFFF",
    "FFFFGGGGGGGGGGGGGGGGGFFFF",
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
    "FFFFFFFFFFFFFFFFFFFFFFFFF",
  ]),
  6
);

/**
     LCM of Two Numbers
    Write a function that returns the least common multiple (LCM) of two integers.

    Examples
    lcm(9, 18) ➞ 18
    lcm(8, 5) ➞ 40
    lcm(17, 11) ➞ 187

    Notes
    Both values will be positive.
    The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.
 */

function lcm(n1, n2) {
  let lcm = 1;
  while (lcm % n1 !== 0 || lcm % n2 !== 0) {
    lcm++;
  }
  return lcm;
}

Test.assertEquals(lcm(9, 18), 18);
Test.assertEquals(lcm(8, 5), 40);
Test.assertEquals(lcm(17, 11), 187);
Test.assertEquals(lcm(17, 5), 85);
Test.assertEquals(lcm(3, 12), 12);
Test.assertEquals(lcm(9, 9), 9);
