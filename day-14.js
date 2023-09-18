import TestModule from "./Test.js";
const Test = new TestModule();

/**
     One Plus One
    Create a function that outputs the result of a math expression in words.

    Examples
    wordedMath("One plus one") ➞ "Two"
    wordedMath("zero Plus one") ➞ "One"
    wordedMath("one minus one") ➞ "Zero"
Notes
 */

function wordedMath(expr) {
  const exprArr = expr.split(" ");
  const numObj = { one: 1, two: 2, zero: 0 };
  const [str1, operator, str2] = exprArr;

  const num1 = numObj[str1.toLowerCase()];
  const num2 = numObj[str2.toLowerCase()];

  let total = 0;
  if (operator.toLowerCase() === "plus") {
    total = num1 + num2;
  } else {
    total = num1 - num2;
  }

  const key = Object.keys(numObj).filter(function (key) {
    return numObj[key] === total;
  })[0];

  return key.charAt(0).toUpperCase() + key.slice(1);
}

Test.assertEquals(wordedMath("One plus one"), "Two");
Test.assertEquals(wordedMath("zero Plus one"), "One");
Test.assertEquals(wordedMath("one minus one"), "Zero");

/**
    Temperature Converter
    Create a function that converts Celsius to Fahrenheit and vice versa.

    Examples
    convert("35°C") ➞ "95°F"
    convert("19°F") ➞ "-7°C"
    convert("33") ➞ "Error"
 */

function convert(deg) {
  const [value, unit] = deg.split("°");

  if (unit === "C") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (value * 9) / 5 + 32;
    return `${fahrenheit.toFixed(0)}°F`;
  } else if (unit === "F") {
    const celsius = ((value - 32) * 5) / 9;
    return `${celsius.toFixed(0)}°C`;
  } else if (unit === "K") {
    const celsius = value - 273.15;
    return `${celsius.toFixed(0)}°C`;
  } else {
    return "Error";
  }
}

Test.assertEquals(convert("35°C"), "95°F");
Test.assertEquals(convert("18°C"), "64°F");
Test.assertEquals(convert("0°F"), "-18°C");
Test.assertEquals(convert("100°C"), "212°F");
Test.assertEquals(convert("69°F"), "21°C");
Test.assertEquals(convert("159°C"), "318°F");
Test.assertEquals(convert("-40°C"), "-40°F");
Test.assertEquals(convert("-40°F"), "-40°C");
Test.assertEquals(convert("16°C"), "61°F");
Test.assertEquals(convert("500°C"), "932°F");
Test.assertEquals(convert("33"), "Error");
Test.assertEquals(convert("19°F"), "-7°C");
Test.assertEquals(convert("85°C"), "185°F");
Test.assertEquals(convert("0°C"), "32°F");
Test.assertEquals(convert("1777°F"), "969°C");
Test.assertEquals(convert("-90°C"), "-130°F");
Test.assertEquals(convert("16°F"), "-9°C");
Test.assertEquals(convert("180°C"), "356°F");
Test.assertEquals(convert("7K"), "Error");
Test.assertEquals(convert("100°F"), "38°C");
