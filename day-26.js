import TestModule from "./Test.js";
const Test = new TestModule();

/**
roduct of Digits of Sum
Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. 
The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
*/

function sumDigProd() {
  const numbers = [...arguments];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const total = multiplyAll(sum);
  return total;
}

function multiplyAll(num) {
  let total = num
    .toString()
    .split("")
    .reduce((acc, curr) => Number(acc) * Number(curr), 1);
  if (total < 9) {
    return total;
  } else {
    if (num === total) {
      return total;
    } else {
      return multiplyAll(total);
    }
  }
}

Test.assertEquals(sumDigProd(8, 16, 89, 3), 6);
Test.assertEquals(sumDigProd(16, 28), 6);
Test.assertEquals(sumDigProd(9), 9);
Test.assertEquals(sumDigProd(26, 497, 62, 841), 6);
Test.assertEquals(sumDigProd(0), 0);
Test.assertEquals(sumDigProd(17737, 98723, 2), 6);
Test.assertEquals(sumDigProd(123, -99), 8);
Test.assertEquals(sumDigProd(9, 8), 7);
Test.assertEquals(sumDigProd(167, 167, 167, 167, 167, 3), 8);
Test.assertEquals(sumDigProd(111111111), 1);
Test.assertEquals(sumDigProd(98526, 54, 863, 156489, 45, 6156), 2);
Test.assertEquals(sumDigProd(999, 999), 8);
Test.assertEquals(sumDigProd(1, 2, 3, 4, 5, 6), 2);
Test.assertEquals(sumDigProd(999, 2222), 2);
Test.assertEquals(sumDigProd(8618, -2), 6);
