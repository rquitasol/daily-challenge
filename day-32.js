import TestModule from "./Test.js";
const Test = new TestModule();

/**
 First Recurrence Index
Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

Examples
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}
recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}
 */

function recurIndex(str) {
  const occurMap = {};
  const result = {};
  if (!str) return {};

  const strArr = str.split("");
  strArr.every((char, idx) => {
    if (occurMap.hasOwnProperty(char)) {
      occurMap[char].push(idx);
      result[char] = occurMap[char];
      return false;
    } else {
      occurMap[char] = [idx];
    }
    return true;
  });

  return result;
}

let [strVectors, objRes] = [
  [
    "DXTDXTXDTXD",
    "YXZXYTUVXWV",
    "YZTTZMNERXE",
    "AREDCBSDERD",
    "",
    null,
    "KDXTDATTDDX",
    "AKEDCBERSDA",
    "DXKETRETXDK",
    "ABCKPEPGBCG",
    "KLMNONMLKOP",
    "ABCDEFGHIJK",
    "ABCDEFGABCD",
    undefined,
  ],
  [
    { D: [0, 3] },
    { X: [1, 3] },
    { T: [2, 3] },
    { D: [3, 7] },
    {},
    {},
    { D: [1, 4] },
    { E: [2, 6] },
    { E: [3, 6] },
    { P: [4, 6] },
    { N: [3, 5] },
    {},
    { A: [0, 7] },
    {},
  ],
];
for (let i in strVectors) {
  Test.assertSimilar(recurIndex(strVectors[i]), objRes[i]);
}

/*
Jake's Meal Time
Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.
Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

Examples
timeToEat("2:00 p.m.") ➞ [5, 0]
// 5 hours until the next meal, dinner
timeToEat("5:50 a.m.") ➞ [1, 10]
// 1 hour and 10 minutes until the next meal, breakfast
 */

function timeToEat(currentTime) {
  const schedule = [7, 12, 19];
  const timeArr = currentTime.split(" ");
  const timeDigits = timeArr[0].split(":");
  const periodOfDay = timeArr[1];

  let currentHour =
    periodOfDay === "p.m." ? Number(timeDigits[0]) + 12 : Number(timeDigits[0]);

  if (currentHour > 19) {
    currentHour -= 12;
  }
  const currentMins = Number(timeDigits[1]);
  const currentMinutes = currentHour * 60 + currentMins;
  let minutesGap = 0;

  schedule.every((hour) => {
    const convertHourtoMinutes = hour * 60;
    if (currentMinutes < convertHourtoMinutes) {
      minutesGap = convertHourtoMinutes - currentMinutes;
      return false;
    }
    return true;
  });

  console.log("currentMinutes", currentMinutes);
  console.log("minutesGap", [Math.floor(minutesGap / 60), minutesGap % 60]);

  return [Math.floor(minutesGap / 60), minutesGap % 60];
}

Test.assertSimilar(timeToEat("2:00 p.m."), [5, 0]);
Test.assertSimilar(timeToEat("5:50 a.m."), [1, 10]);
Test.assertSimilar(timeToEat("6:37 p.m."), [0, 23]);
Test.assertSimilar(timeToEat("12:00 a.m."), [7, 0]);
Test.assertSimilar(timeToEat("11:58 p.m."), [7, 2]);
Test.assertSimilar(timeToEat("08:00 p.m."), [13, 0]);
Test.assertSimilar(timeToEat("3:33 p.m."), [3, 27]);
