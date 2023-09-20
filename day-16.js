import TestModule from "./Test.js";
const Test = new TestModule();

/**
    The Frugal Gentleman
    Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. 
    However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate),
     he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
    Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. 
    If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

    Examples
    chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
    ]) ➞ "Wine 9"
    chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
    chosenWine([]) ➞ null
 */

function chosenWine(wines) {
  if (wines.length === 0) return null;
  if (wines.length === 1) return wines[0].name;

  const sortedPrices = wines.sort((a, b) => a.price - b.price);
  return sortedPrices[1].name;
}

Test.assertEquals(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ]),
  "Wine 9"
);
Test.assertEquals(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine B", price: 9.99 },
  ]),
  "Wine B"
);
Test.assertEquals(chosenWine([{ name: "Wine A", price: 8.99 }]), "Wine A");
Test.assertEquals(chosenWine([]), null);
Test.assertEquals(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 389", price: 109.99 },
    { name: "Wine 44", price: 38.44 },
    { name: "Wine 72", price: 22.77 },
  ]),
  "Wine 72"
);

/**
    Map the Letters in a String
    Given a word, create an object that stores the indexes of each letter in an array.

    Make sure the letters are the keys.
    Make sure the letters are symbols.
    Make sure the indexes are stored in an array and those arrays are values.
    Examples
    mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
    mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
    mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
 */

function mapLetters(word) {
  const letterArr = word.split("");
  let result = {};

  letterArr.forEach((letter, idx) => {
    if (result.hasOwnProperty(letter)) {
      result[letter].push(idx);
    } else {
      result[letter] = [idx];
    }
  });

  return result;
}

Test.assertSimilar(mapLetters(""), {});
Test.assertSimilar(mapLetters("a"), { a: [0] });
Test.assertSimilar(mapLetters("abcdefg"), {
  a: [0],
  b: [1],
  c: [2],
  d: [3],
  e: [4],
  f: [5],
  g: [6],
});
Test.assertSimilar(mapLetters("balloon"), {
  b: [0],
  a: [1],
  l: [2, 3],
  o: [4, 5],
  n: [6],
});
Test.assertSimilar(mapLetters("imagining"), {
  i: [0, 4, 6],
  m: [1],
  a: [2],
  g: [3, 8],
  n: [5, 7],
});
Test.assertSimilar(mapLetters("mummy"), { m: [0, 2, 3], u: [1], y: [4] });
Test.assertSimilar(mapLetters("aaaaaaabaaabaaabbb"), {
  a: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14],
  b: [7, 11, 15, 16, 17],
});

/**
 Vowel to Vowel Links
Given a sentence as str, return true if any two adjacent words have this property: 
One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

Examples
vowelLinks("a very large appliance") ➞ true
vowelLinks("go to edabit") ➞ true
vowelLinks("an open fire") ➞ false
vowelLinks("a sudden applause") ➞ false
 */

function vowelLinks(str) {
  //split by space,
  const wordArr = str.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];

  return wordArr.some((word, idx) => {
    const nextWord = wordArr[idx + 1];
    while (nextWord) {
      if (
        vowels.includes(word.charAt(word.length - 1).toLowerCase()) &&
        vowels.includes(nextWord.charAt(0).toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }
  });
}

Test.assertEquals(vowelLinks("an open fire"), false);
Test.assertEquals(vowelLinks("the sudden applause"), false);
Test.assertEquals(vowelLinks("the large appliances"), true);
Test.assertEquals(vowelLinks("creative environment"), true);
Test.assertEquals(vowelLinks("Creative Environment"), true);
Test.assertEquals(vowelLinks("beneficial luggage"), false);
Test.assertEquals(vowelLinks("the eagle swooped down low"), true);
Test.assertEquals(vowelLinks("this is not a drill"), false);
Test.assertEquals(vowelLinks("Patrice Evra"), true);
Test.assertEquals(vowelLinks("please log on to edabit"), true);
Test.assertEquals(vowelLinks("the quick brown fox was sad"), false);
