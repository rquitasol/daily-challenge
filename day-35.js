import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Ascending Consecutive Numbers
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
 */

function ascending(str) {
  for (let i = 1; i <= str.length / 2; i++) {
    const start = str.substring(0, i);
    let current = parseInt(start);
    let expectedNext = current + 1;
    let index = i;

    while (index < str.length) {
      const next = str.substring(index, index + expectedNext.toString().length);
      if (parseInt(next) === expectedNext) {
        current = expectedNext;
        expectedNext++;
        index += next.length;
      } else {
        break;
      }
    }

    if (index === str.length) {
      return true;
    }
  }

  return false;
}

Test.assertEquals(ascending("232425"), true);
Test.assertEquals(ascending("444445"), true);
Test.assertEquals(ascending("1234567"), true);
Test.assertEquals(ascending("123412351236"), true);
Test.assertEquals(ascending("57585960616263"), true);
Test.assertEquals(ascending("500001500002500003"), true);
Test.assertEquals(ascending("919920921"), true);

Test.assertEquals(ascending("2324256"), false);
Test.assertEquals(ascending("1235"), false);
Test.assertEquals(ascending("121316"), false);
Test.assertEquals(ascending("12131213"), false);
Test.assertEquals(ascending("54321"), false);
Test.assertEquals(ascending("56555453"), false);
Test.assertEquals(ascending("90090190290"), false);
Test.assertEquals(ascending("35236237238"), false);
