import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Reverse the Odd Length Words
    Given a string, reverse all the words which have odd length. The even length words are not changed.

    Examples
    reverseOdd("Bananas") ➞ "sananaB"
    reverseOdd("One two three four") ➞ "enO owt eerht four"
    reverseOdd("Make sure uoy only esrever sdrow of ddo length")
    ➞ "Make sure you only reverse words of odd length"
 */

function reverseOdd(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length % 2 !== 0) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

Test.assertEquals(reverseOdd("One two three four"), "enO owt eerht four");
Test.assertEquals(
  reverseOdd("Make sure uoy only esrever sdrow of ddo length"),
  "Make sure you only reverse words of odd length"
);
Test.assertEquals(reverseOdd(""), "", "Should work with empty string.");
Test.assertEquals(
  reverseOdd("Bananas"),
  "sananaB",
  "Should work with only one word."
);
Test.assertEquals(
  reverseOdd("Even even even even even even even even even"),
  "Even even even even even even even even even"
);
Test.assertEquals(
  reverseOdd("Odd odd odd odd odd odd odd odd odd odd odd"),
  "ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo"
);

/**
    Pandigital Numbers
    A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

    Examples
    isPandigital(98140723568910) ➞ true
    isPandigital(90864523148909) ➞ false
    // 7 is missing.
    isPandigital(112233445566778899) ➞ false
 */

function isPandigital(num) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return numbers.every((val) => {
    return num.toString().split("").includes(val);
  });
}

Test.assertEquals(isPandigital(84847473937), false);
Test.assertEquals(isPandigital(546732965015), false);
Test.assertEquals(isPandigital(6781235184590), true);
Test.assertEquals(isPandigital(9432821089765), true);
Test.assertEquals(isPandigital(629764), false);
Test.assertEquals(isPandigital(90864523148909), false);
Test.assertEquals(isPandigital(7296012), false);
Test.assertEquals(isPandigital(647380265483206), false);
Test.assertEquals(isPandigital(38165975424790), true);
Test.assertEquals(isPandigital(8146327815320), false);
Test.assertEquals(isPandigital(768431605430), false);
Test.assertEquals(isPandigital(4920124852367763), true);
Test.assertEquals(isPandigital(60543981597247), true);
Test.assertEquals(isPandigital(10282343456789), true);

/**
    Smooth Sentences
    Carlos is a huge fan of something he calls smooth sentences.
    A smooth sentence is one where the last letter of each word is identical to the first letter 
    the following word (and not case sensitive, so "A" would be the same as "a").
    The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends 
    with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".
    Create a function that determines whether the input sentence is a smooth sentence, 
    returning a boolean value true if it is, false if it is not.

    Examples
    isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true
    isSmooth("Someone is outside the doorway") ➞ false
    isSmooth("She eats super righteously") ➞ true
    */

function isSmooth(sentence) {
  const sentenceArr = sentence.split(" ");
  return sentenceArr.every((word, idx) => {
    const succeedingWord = sentenceArr[idx + 1];
    if (succeedingWord) {
      const last = word.charAt(word.length - 1);
      const first = succeedingWord.charAt(0);
      return last.toLowerCase() === first.toLowerCase();
    } else {
      return true;
    }
  });
}

Test.assertEquals(
  isSmooth("Marta appreciated deep perpendicular right trapezoids"),
  true
);
Test.assertEquals(isSmooth("Someone is outside the doorway"), false);
Test.assertEquals(isSmooth("She eats super righteously"), true);
Test.assertEquals(isSmooth("Ben naps so often"), true);
Test.assertEquals(isSmooth("Cute triangles are cute"), false);
Test.assertEquals(isSmooth("Mad dislikes sharp pointy yoyos"), true);
Test.assertEquals(isSmooth("Rita asks Sam mean numbered dilemmas"), true);
Test.assertEquals(isSmooth("Marigold daffodils streaming happily."), false);
Test.assertEquals(isSmooth("Simply wonderful laughing."), false);

/**
    Frequency Distribution
    Create a function that returns the frequency distribution of an array. 
    This function should return an object, where the keys are the unique elements 
    and the values are the frequency in which those elements occur.

    Examples
    getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
    getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
    getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
    getFrequencies([]) ➞ {}
 */

function getFrequencies(arr) {
  const result = {};

  arr.forEach((char) => {
    if (result.hasOwnProperty(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });

  return result;
}

Test.assertSimilar(getFrequencies(["A", "A"]), { A: 2 });
Test.assertSimilar(getFrequencies(["A", "B", "A", "A", "A"]), { A: 4, B: 1 });
Test.assertSimilar(getFrequencies(["A", "B", "C", "A", "A"]), {
  A: 3,
  B: 1,
  C: 1,
});
Test.assertSimilar(getFrequencies([true, false, true, false, false]), {
  true: 2,
  false: 3,
});
Test.assertSimilar(getFrequencies([1, 2, 3, 3, 2]), { 1: 1, 2: 2, 3: 2 });
Test.assertSimilar(getFrequencies([]), {});
