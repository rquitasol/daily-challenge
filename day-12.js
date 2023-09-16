import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Convert "Zero" and "One" to "1" and "0"
    Create a function that takes a string as an argument. 
    The function must return a string containing 1s and 0s based on the string argument's words. 
    If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. 
    The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

    Examples
    textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"
    textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"
    textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"
    textToNumberBinary("zero one zero one zero one zero three") ➞ ""
    textToNumberBinary("one one") ➞ ""
 */

function textToNumberBinary(str) {
  const strArr = str
    .split(" ")
    .filter(
      (word) => word.toLowerCase() === "zero" || word.toLowerCase() === "one"
    );

  const convertedStr = strArr.map((word) => {
    if (word.toLowerCase() === "zero") {
      return 0;
    } else {
      return 1;
    }
  });

  const result = convertedStr
    .join("")
    .slice(0, convertedStr.length - (convertedStr.length % 8));
  return result;
}

Test.assertEquals(
  textToNumberBinary("one one one one zero zero zero zero"),
  "11110000"
);
Test.assertEquals(
  textToNumberBinary(
    "one Zero zero one zero zero one one one one one zero oNe one one zero one zerO"
  ),
  "1001001111101110"
);
Test.assertEquals(textToNumberBinary("one zero one"), "");
Test.assertEquals(
  textToNumberBinary("one zero zero one zero ten one one one one two"),
  "10010111"
);
Test.assertEquals(
  textToNumberBinary(
    "One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero"
  ),
  "1001011101100001011101100001011101100001011101100001011101100001"
);
Test.assertEquals(textToNumberBinary("TWO one zero one one zero one zero"), "");
Test.assertEquals(
  textToNumberBinary("TWO one zero one one zero one zero one"),
  "10110101"
);

/**
    Return the Most Expensive Piece of Jewellery
    You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
    Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

    Examples
    mostExpensive ({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
    }) ➞  "The most expensive one is the Pearl Necklace"
    mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
    }) ➞ "The most expensive one is the Diamond Ring"
 */

function mostExpensive(obj) {
  let result = "";

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  result = Object.values(sorted)[0][0];

  return `The most expensive one is the ${result}`;
}

Test.assertEquals(
  mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  }),
  "The most expensive one is the Pearl Necklace"
);
Test.assertSimilar(
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  }),
  "The most expensive one is the Diamond Ring"
);
Test.assertEquals(
  mostExpensive({
    "Simple Gold Ring": 310,
    "Silver Anklet": 110,
    "Crystal Bracelet": 190,
  }),
  "The most expensive one is the Simple Gold Ring"
);
