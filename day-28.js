import TestModule from "./Test.js";
const Test = new TestModule();

/**
     Combine Two Objects Into One, Summing Like Values
    Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.
    There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year.
    They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

    const user1 = {
    powerPlant: 70000,
    rental: 12000
    }
    const user2 = {
    teaching: 40000,
    rental: 10000
    }
    becomes ➞ {
    powerPlant: 70000,
    teaching: 40000,
    rental: 22000   // The rental income is added together.
    }
 */

function combine(user1Income, user2Income) {
  const result = {};

  for (const prop in user1Income) {
    if (user2Income.hasOwnProperty(prop)) {
      result[prop] = user1Income[prop] + user2Income[prop];
    } else {
      result[prop] = user1Income[prop];
    }
  }

  for (const prop in user2Income) {
    if (!result.hasOwnProperty(prop)) {
      result[prop] = user2Income[prop];
    }
  }

  return Object.fromEntries(Object.entries(result).sort((a, b) => b[1] - a[1]));
}

const test1User1Income = {
  softwareDeveloping: 70000,
  rental: 10000,
};

const test1User2Income = {
  teaching: 40000,
  rental: 12000,
};

const test1Answer = {
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};

test1User2Income;

Test.assertSimilar(combine(test1User1Income, test1User2Income), test1Answer);

const test2User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  rental: 10000,
};

const test2User2Income = {
  teaching: 40000,
  rental: 12000,
};

const test2Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};

test1User2Income;

Test.assertSimilar(combine(test2User1Income, test2User2Income), test2Answer);

const test3User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  sellingGarlic: 6000,
  rental: 10000,
};

const test3User2Income = {
  rental: 12000,
  sellingGarlic: 32000,
};

const test3Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  sellingGarlic: 38000,
  softwareDeveloping: 70000,
};

Test.assertSimilar(combine(test3User1Income, test3User2Income), test3Answer);

/*
    Nearest Chapter
    Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

    Examples
    nearestChapter({
    "Chapter 1" : 1,
    "Chapter 2" : 15,
    "Chapter 3" : 37
    }, 10) ➞ "Chapter 2"
    nearestChapter({
    "New Beginnings" : 1,
    "Strange Developments" : 62,
    "The End?" : 194,
    "The True Ending" : 460
    }, 200) ➞ "The End?"
    nearestChapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
    }, 3) ➞ "Chapter 1b"
 */

function nearestChapter(chapt, page) {
  const result = [];
  for (const key in chapt) {
    if (page > chapt[key]) {
      result.push([key, page - chapt[key], chapt[key]]);
    } else {
      result.push([key, chapt[key] - page, chapt[key]]);
    }
  }

  const sortByDifference = result.sort((a, b) => a[1] - b[1]);
  const sortByPage = result.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[2] - a[2];
    }
  });

  return sortByPage[0][0];
}

let [actualParam, expectedParam] = [
  [
    [{ "Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37 }, 10],
    [
      {
        "New Beginnings": 1,
        "Strange Developments": 62,
        "The End?": 194,
        "The True Ending": 460,
      },
      200,
    ],
    [{ "Chapter 1a": 1, "Chapter 1b": 5 }, 3],
    [
      { "Chapter 1a": 1, "Chapter 1b": 5, "Chapter 1c": 50, "Chapter 1d": 100 },
      75,
    ],
    [
      {
        "Chapter 1a": 1,
        "Chapter 1b": 5,
        "Chapter 1c": 50,
        "Chapter 1d": 100,
        "Chapter 1e": 200,
      },
      150,
    ],
    [
      {
        "Chapter 1a": 1,
        "Chapter 1b": 5,
        "Chapter 1c": 50,
        "Chapter 1d": 100,
        "Chapter 1e": 200,
      },
      74,
    ],
    [
      {
        "Chapter 1a": 1,
        "Chapter 1b": 5,
        "Chapter 1c": 50,
        "Chapter 1d": 100,
        "Chapter 1e": 200,
        "Chapter 1f": 400,
      },
      300,
    ],
    [{ "Chapter Four": 46, "Chapter Five": 54 }, 50],
  ],
  [
    "Chapter 2",
    "The End?",
    "Chapter 1b",
    "Chapter 1d",
    "Chapter 1e",
    "Chapter 1c",
    "Chapter 1f",
    "Chapter Five",
  ],
];
for (let i in actualParam)
  Test.assertEquals(
    nearestChapter(actualParam[i][0], actualParam[i][1]),
    expectedParam[i]
  );
