import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Minimum Steps to a Palindrome
Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.

Examples
minPalindromeSteps("race") ➞ 3
// Add 3 letters: "car" to make "racecar"

minPalindromeSteps("mada") ➞ 1
// Add 1 letter: "m" to make "madam"

minPalindromeSteps("mirror") ➞ 3
// Add 3 letters: "rim" to make "mirrorrim"
 */

function minPalindromeSteps(str) {
  if (str.split("").reverse().join("") === str) {
    return 0;
  }
  const result = 1 + minPalindromeSteps(str.slice(1));
  return result;
}

Test.assertEquals(minPalindromeSteps("race"), 3);
Test.assertEquals(minPalindromeSteps("mada"), 1);
Test.assertEquals(minPalindromeSteps("mirror"), 3);
Test.assertEquals(minPalindromeSteps("maa"), 1);
Test.assertEquals(minPalindromeSteps("m"), 0);
Test.assertEquals(minPalindromeSteps("rad"), 2);
Test.assertEquals(minPalindromeSteps("madam"), 0);
Test.assertEquals(minPalindromeSteps("radar"), 0);
Test.assertEquals(minPalindromeSteps("www"), 0);
Test.assertEquals(minPalindromeSteps("me"), 1);
Test.assertEquals(minPalindromeSteps("rorr"), 2);
Test.assertEquals(minPalindromeSteps("pole"), 3);
