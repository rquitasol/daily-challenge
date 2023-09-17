import TestModule from "./Test.js";
const Test = new TestModule();

/**
 C*ns*r*d Str*ngs
Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
Given a censored string and a string of the censored vowels, return the original uncensored string.

Example
uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
uncensor("abcd", "") ➞ "abcd"
uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
 */

function uncensor(str, vowels) {
  let idx = 0;
  return str
    .split("")
    .map((letter) => {
      if (letter === "*") {
        letter = vowels[idx];
        idx++;
      }
      return letter;
    })
    .join("");
}

Test.assertEquals(
  uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"),
  "Where did my vowels go?"
);
Test.assertEquals(uncensor("abcd", ""), "abcd", "Works with no vowels.");
Test.assertEquals(
  uncensor("*PP*RC*S*", "UEAE"),
  "UPPERCASE",
  "Works with uppercase"
);
Test.assertEquals(
  uncensor("Ch**s*, Gr*mm*t -- ch**s*", "eeeoieee"),
  "Cheese, Grommit -- cheese",
  "Works with * at the end"
);
Test.assertEquals(
  uncensor("*l*ph*nt", "Eea"),
  "Elephant",
  "Works with * at the start"
);

/**
    White Spaces Between Lower and Uppercase Letters
    Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

    Examples
    insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
    insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
    insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
 */

function insertWhitespace(s) {
  return s
    .split("")
    .map((letter) => {
      if (letter !== letter.toLowerCase()) {
        letter = ` ${letter}`;
      }
      return letter;
    })
    .join("")
    .slice(1);
}

Test.assertEquals(
  insertWhitespace("SheWalksToTheBeach"),
  "She Walks To The Beach"
);
Test.assertEquals(
  insertWhitespace("MarvinTalksTooMuch"),
  "Marvin Talks Too Much"
);
Test.assertEquals(
  insertWhitespace("HopelesslyDevotedToYou"),
  "Hopelessly Devoted To You"
);
Test.assertEquals(
  insertWhitespace("EvenTheBestFallDownSometimes"),
  "Even The Best Fall Down Sometimes"
);
Test.assertEquals(
  insertWhitespace("TheGreatestUpsetInHistory"),
  "The Greatest Upset In History"
);

/**
     GCD and LCM (Part 2)
    Create a function that takes two numbers as arguments and return the LCM of the two numbers.

    Examples
    lcm(3, 5) ➞ 15
    lcm(14, 28) ➞ 28
    lcm(4, 6) ➞ 12
 */

function lcm(a, b) {
  let lcm = 1;
  while (lcm % a !== 0 || lcm % b !== 0) {
    lcm++;
  }
  return lcm;
}

Test.assertEquals(lcm(6, 10), 30);
Test.assertEquals(lcm(30, 60), 60);
Test.assertEquals(lcm(10000, 333), 3330000);
Test.assertEquals(lcm(75, 135), 675);
Test.assertEquals(lcm(102, 2), 102);

/**
    Swapping Cards
    Two players draw a pair of numbered cards so that both players can form a 2 digit number. 
    A winner can be decided if one player's number is larger than the other.
    However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! 
    Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.

    Numbered Cards
    Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.
    n1 is Paul's number
    n2 is his opponent's number
    Worked Example
    swap_cards(41, 79) ➞ true
    // Paul's lowest number is 1
    // The opponent's ten's digit is 7
    // After the swap: 47 > 19
    // Paul wins the round

    Examples
    swapCards(41, 98) ➞ true
    swapCards(12, 28) ➞ true
    swapCards(67, 53) ➞ false
    swapCards(77, 54) ➞ false
 */

function swapCards(n1, n2) {
  const paulsNum = n1.toString().split("");
  const paulsLowestNum = n1
    .toString()
    .split("")
    .sort((a, b) => a - b)[0];
  const paulsLowestNumIdx = paulsNum.indexOf(paulsLowestNum);

  const oppNum = n2.toString().split("");
  const oppTensNum = oppNum[0];

  paulsNum[paulsLowestNumIdx] = oppTensNum;
  const oppNewNum = [paulsLowestNum, oppNum[1]].join("");

  return Number(paulsNum.join("")) > Number(oppNewNum);
}

Test.assertEquals(swapCards(41, 98), true);
Test.assertEquals(swapCards(12, 28), true);
Test.assertEquals(swapCards(67, 53), false);
Test.assertEquals(swapCards(77, 54), false);
Test.assertEquals(swapCards(45, 23), false);
Test.assertEquals(swapCards(74, 81), true);
Test.assertEquals(swapCards(75, 35), true);
Test.assertEquals(swapCards(21, 25), true);
Test.assertEquals(swapCards(22, 34), true);
Test.assertEquals(swapCards(24, 12), false);
Test.assertEquals(swapCards(52, 46), true);
Test.assertEquals(swapCards(88, 45), false);
Test.assertEquals(swapCards(48, 54), true);
Test.assertEquals(swapCards(75, 87), true);
Test.assertEquals(swapCards(13, 12), true);
Test.assertEquals(swapCards(25, 41), true);
Test.assertEquals(swapCards(48, 14), false);
