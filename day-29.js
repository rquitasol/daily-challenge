import TestModule from "./Test.js";
const Test = new TestModule();

/**
     Programming Polyglot
    Create a function that takes a number that represents a person's programming language score, and returns an alphabetised array of programming languages they are proficient in.
    Arbitrarily assigned points for each language are listed below:

    Language	Points
    C#	1
    C++	2
    Java	4
    JavaScript	8
    PHP	16
    Python	32
    Ruby	64
    Swift	128

    Examples
    getLanguages(25) ➞ ["C#", "JavaScript", "PHP"]
    getLanguages(100) ➞ ["Java", "Python", "Ruby"]
    getLanguages(53) ➞ ["C#", "Java", "PHP", "Python"]
 */

function getLanguages(num) {
  const result = [];

  const langMap = [
    ["Swift", 128],
    ["Ruby", 64],
    ["Python", 32],
    ["PHP", 16],
    ["JavaScript", 8],
    ["Java", 4],
    ["C++", 2],
    ["C#", 1],
  ];

  let total = 0;
  for (const ele of langMap) {
    const [lang, point] = ele;
    if (point <= num) {
      total += point;
      if (total <= num) {
        result.push(lang);
      } else if (total > num) {
        total -= point;
      }
      if (total === num) {
        break;
      }
    }
  }
  return result.sort();
}

Test.assertSimilar(getLanguages(32), ["Python"]);
Test.assertSimilar(getLanguages(25), ["C#", "JavaScript", "PHP"]);
Test.assertSimilar(getLanguages(100), ["Java", "Python", "Ruby"]);
Test.assertSimilar(getLanguages(255), [
  "C#",
  "C++",
  "Java",
  "JavaScript",
  "PHP",
  "Python",
  "Ruby",
  "Swift",
]);
Test.assertSimilar(getLanguages(53), ["C#", "Java", "PHP", "Python"]);
Test.assertSimilar(getLanguages(12), ["Java", "JavaScript"]);

/**
 Know Your Neighbor
Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise.

Examples
plusSign("+f+d+c+#+f+") ➞ true
plusSign("+d+=3=+s+") ➞ true
plusSign("f++d+g+8+") ➞ false
plusSign("+s+7+fg+r+8+") ➞ false

 */

function plusSign(str) {
  const strArr = str.split("");
  return strArr.every((letter, idx) => {
    if (/^[a-zA-Z]$/.test(letter)) {
      return strArr[idx - 1] === "+" && strArr[idx + 1] === "+";
    }
    return true;
  });
}

Test.assertEquals(plusSign("+f+d+c+#+f+"), true);
Test.assertEquals(plusSign("+d+=3=+s+"), true);
Test.assertEquals(plusSign("+d+k+##f+"), false);
Test.assertEquals(plusSign("hf+d++#+f+"), false);
Test.assertEquals(plusSign("+d+i+#+c+"), true);
Test.assertEquals(plusSign("a+"), false);
