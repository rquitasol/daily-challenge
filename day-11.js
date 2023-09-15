import TestModule from "./Test.js";
const Test = new TestModule();

/**
    Double Character Swap
    Write a function to replace all instances of character c1 with character c2 and vice versa.

    Examples
    doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"
    doubleSwap("random w#rds writt&n h&r&", "#", "&")
    ➞ "random w&rds writt#n h#r#"
    doubleSwap("128 895 556 788 999", "8", "9")
    ➞ "129 985 556 799 888"
 */

function doubleSwap(str, c1, c2) {
  return str
    .split("")
    .map((letter) => {
      if (letter === c1) {
        return c2;
      } else if (letter === c2) {
        return c1;
      } else {
        return letter;
      }
    })
    .join("");
}

Test.assertEquals(doubleSwap("aabbccc", "a", "b"), "bbaaccc");
Test.assertEquals(
  doubleSwap("random w#rds writt&n h&r&", "#", "&"),
  "random w&rds writt#n h#r#"
);
Test.assertEquals(
  doubleSwap("128 895 556 788 999", "8", "9"),
  "129 985 556 799 888"
);
Test.assertEquals(doubleSwap("mamma mia", "m", "a"), "amaam aim");
Test.assertEquals(doubleSwap("**##**", "*", "#"), "##**##");
Test.assertEquals(doubleSwap("123456789", "4", "5"), "123546789");
Test.assertEquals(doubleSwap("445566&&", "4", "&"), "&&556644");
Test.assertEquals(doubleSwap("!?@,.", ",", "."), "!?@.,");
Test.assertEquals(doubleSwap("Q_Q T_T =.= >.<", "Q", "T"), "T_T Q_Q =.= >.<");
Test.assertEquals(
  doubleSwap("(Q_Q) (T_T) (=.=) (>.<)", ")", "("),
  ")Q_Q( )T_T( )=.=( )>.<("
);
Test.assertEquals(doubleSwap("<>", ">", "<"), "><");
Test.assertEquals(doubleSwap("001101", "1", "0"), "110010");
Test.assertEquals(
  doubleSwap(
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    "a",
    "b"
  ),
  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`bacdefghijklmnopqrstuvwxyz{|}~"
);

/**
     Basic Arithmetic Operations on a String Number
    Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").
    Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.
    eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

    For example:
    "15 / 0"  ➞ -1
    Examples
    arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24
    arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0
    arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144
    arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1
 */

function arithmeticOperation(n) {
  const [num1, operator, num2] = n.split(" ");
  let total = 0;
  switch (operator) {
    case "+":
      total = Number(num1) + Number(num2);
      break;
    case "-":
      total = Number(num1) - Number(num2);
      break;
    case "*":
      total = Number(num1) * Number(num2);
      break;
    case "/":
      if (Number(num1) === 0 || Number(num2) === 0) {
        total = -1;
      } else {
        total = Number(num1) / Number(num2);
      }
      break;
    default:
      total = 0;
  }
  return total;
}

Test.assertEquals(arithmeticOperation("12 + 12"), 24);
Test.assertEquals(arithmeticOperation("22 - 12"), 10);
Test.assertEquals(arithmeticOperation("100 * 12"), 1200);
Test.assertEquals(arithmeticOperation("120 / 10"), 12);
Test.assertEquals(arithmeticOperation("122 / 0"), -1);
Test.assertEquals(arithmeticOperation("10 * 20"), 200);
Test.assertEquals(arithmeticOperation("10 - 10"), 0);
Test.assertEquals(arithmeticOperation("10 - 12"), -2);

/**
     Combinatorial Exploration
    Given a known number of unique items, how many ways could we arrange them in a row?

    Create a function that takes an integer n and returns the number of digits of the number of possible permutations for n unique items. For instance, 5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.

    Examples
    noPermsDigits(0) ➞ 1
    noPermsDigits(1) ➞ 1
    noPermsDigits(5) ➞ 3
    noPermsDigits(8) ➞ 5
    Notes
    This challenge requires some understanding of combinatorics.
 */

function noPermsDigits(n) {
  let total = 1n;
  for (let i = 1n; i < n + 1; i++) {
    total *= i;
  }
  return total.toString().split("").length;
}

Test.assertEquals(noPermsDigits(0), 1);
Test.assertEquals(noPermsDigits(1), 1);
Test.assertEquals(noPermsDigits(2), 1);
Test.assertEquals(noPermsDigits(3), 1);
Test.assertEquals(noPermsDigits(4), 2);
Test.assertEquals(noPermsDigits(5), 3);
Test.assertEquals(noPermsDigits(6), 3);
Test.assertEquals(noPermsDigits(7), 4);
Test.assertEquals(noPermsDigits(8), 5);
Test.assertEquals(noPermsDigits(9), 6);
Test.assertEquals(noPermsDigits(10), 7);
Test.assertEquals(noPermsDigits(11), 8);
Test.assertEquals(noPermsDigits(12), 9);
Test.assertEquals(noPermsDigits(13), 10);
Test.assertEquals(noPermsDigits(14), 11);
Test.assertEquals(noPermsDigits(15), 13);
Test.assertEquals(noPermsDigits(16), 14);
Test.assertEquals(noPermsDigits(17), 15);
Test.assertEquals(noPermsDigits(18), 16);
Test.assertEquals(noPermsDigits(19), 18);
Test.assertEquals(noPermsDigits(25), 26);
Test.assertEquals(noPermsDigits(50), 65);
Test.assertEquals(noPermsDigits(75), 110);
Test.assertEquals(noPermsDigits(100), 158);
Test.assertEquals(noPermsDigits(125), 210);
Test.assertEquals(noPermsDigits(150), 263);
Test.assertEquals(noPermsDigits(175), 319);
Test.assertEquals(noPermsDigits(200), 375);
Test.assertEquals(noPermsDigits(225), 434);
Test.assertEquals(noPermsDigits(250), 493);
Test.assertEquals(noPermsDigits(275), 554);
Test.assertEquals(noPermsDigits(300), 615);
Test.assertEquals(noPermsDigits(325), 677);
Test.assertEquals(noPermsDigits(350), 741);
Test.assertEquals(noPermsDigits(375), 805);
Test.assertEquals(noPermsDigits(400), 869);
Test.assertEquals(noPermsDigits(425), 935);
Test.assertEquals(noPermsDigits(450), 1001);
Test.assertEquals(noPermsDigits(475), 1067);
Test.assertEquals(noPermsDigits(500), 1135);
Test.assertEquals(noPermsDigits(525), 1202);
Test.assertEquals(noPermsDigits(550), 1271);
Test.assertEquals(noPermsDigits(575), 1339);
Test.assertEquals(noPermsDigits(600), 1409);
Test.assertEquals(noPermsDigits(625), 1478);
Test.assertEquals(noPermsDigits(650), 1548);
Test.assertEquals(noPermsDigits(675), 1619);
Test.assertEquals(noPermsDigits(700), 1690);
Test.assertEquals(noPermsDigits(725), 1761);
Test.assertEquals(noPermsDigits(750), 1833);
Test.assertEquals(noPermsDigits(775), 1905);
Test.assertEquals(noPermsDigits(800), 1977);
Test.assertEquals(noPermsDigits(825), 2050);
Test.assertEquals(noPermsDigits(850), 2123);
Test.assertEquals(noPermsDigits(875), 2197);
Test.assertEquals(noPermsDigits(900), 2270);
Test.assertEquals(noPermsDigits(925), 2344);
Test.assertEquals(noPermsDigits(950), 2419);
Test.assertEquals(noPermsDigits(975), 2493);
