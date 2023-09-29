import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Cleaning Project Files
You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is located in the same folder.

To clean it up, you've decided that you will use one of two organization methods.

The prefix method: You will group all files with the same project name under the same folder.
The suffix method: You will group all files with the same extension under the same folder.
Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). A folder is a grouping of files in the same array.

Examples
// Sorting by project name (ex1 and ex2)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") ➞ [
  ["ex1.html", "ex1.js"],
  ["ex2.html", "ex2.js"]
]

// Sorting by extension (.html and .js)
cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") ➞ [
  ["ex1.html", "ex2.html"],
  ["ex1.js", "ex2.js"]
]

cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") ➞ [
  ["music_app.js", "music_app.png", "music_app.wav"],
  ["tetris.png", "tetris.js"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
]

cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
  ["_1.rb"], ["_2.rb"],
  ["_3.rb"], ["_4.rb"]
]
 */

function cleanUp(files, sort) {
  let result = {};
  files.forEach((file) => {
    const [filename, extension] = file.split(".");

    if (sort === "prefix") {
      if (result.hasOwnProperty(filename)) {
        result[filename].push(file);
      } else {
        result[filename] = [file];
      }
    } else {
      if (result.hasOwnProperty(extension)) {
        result[extension].push(file);
      } else {
        result[extension] = [file];
      }
    }
  });

  return Object.values(result);
}

Test.assertSimilar(
  cleanUp(
    [
      "music_app.js",
      "music_app.png",
      "music_app.wav",
      "tetris.png",
      "tetris.js",
    ],
    "prefix"
  ),
  [
    ["music_app.js", "music_app.png", "music_app.wav"],
    ["tetris.png", "tetris.js"],
  ]
);
Test.assertSimilar(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix"), [
  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"],
]);
Test.assertSimilar(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix"), [
  ["_1.rb"],
  ["_2.rb"],
  ["_3.rb"],
  ["_4.rb"],
]);
Test.assertSimilar(
  cleanUp(
    [
      "project1.html",
      "project2.html",
      "project1.css",
      "project2.css",
      "project1.js",
      "project2.js",
    ],
    "suffix"
  ),
  [
    ["project1.html", "project2.html"],
    ["project1.css", "project2.css"],
    ["project1.js", "project2.js"],
  ]
);

/**
 Sexagenary Cycle (Chinese Zodiac)
In early recorded Chinese history, time was reckoned using the sexagenary (60-year) cycle, generated from two subcycles:

Five heavenly stems (elements) in this order: wood, fire, earth, metal, water. The stems change every two years.
Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly.
The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.

The first 14 years of the current cycle are shown in the table below:

Gregorian Year	Stem	Branch
1984	Wood	Rat
1985	Wood	Ox
1986	Fire	Tiger
1987	Fire	Rabbit
1988	Earth	Dragon
1989	Earth	Snake
1990	Metal	Horse
1991	Metal	Sheep
1992	Water	Monkey
1993	Water	Rooster
1994	Wood	Dog
1995	Wood	Pig
1996	Fire	Rat
1997	Fire	Ox
These days, the sexagenary cycle is used mainly for historical celebrations and events, and in Chinese astrology. The Gregorian calendar is now the standard means of reckoning time.

Create a function that takes a number representing a year in the Gregorian calendar, and returns a string consisting of the corresponding stem-and-branch combination in the sexagenary cycle.

Examples
sexagenary(1971) ➞ "Metal Pig"
sexagenary(1927) ➞ "Fire Rabbit"
sexagenary(1974) ➞ "Wood Tiger"
 */

function sexagenary(year) {
  // Define arrays for the heavenly stems and earthly branches
  const heavenlyStems = ["Wood", "Fire", "Earth", "Metal", "Water"];
  const earthlyBranches = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Sheep",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];

  // Calculate the position within the 60-year cycle
  const cyclePosition = (year - 1984) % 60;

  // Ensure positive value for cyclePosition
  const positiveCyclePosition =
    cyclePosition < 0 ? cyclePosition + 60 : cyclePosition;

  // Calculate the stem and branch indexes
  const stemIndex = positiveCyclePosition % 10;
  const branchIndex = positiveCyclePosition % 12;

  // Get the corresponding stem and branch
  const stem = heavenlyStems[stemIndex];
  const branch = earthlyBranches[branchIndex];

  // Return the stem and branch combination
  return `${stem} ${branch}`;
}

Test.assertEquals(sexagenary(1971), "Metal Pig");
Test.assertEquals(sexagenary(1927), "Fire Rabbit");
Test.assertEquals(sexagenary(2017), "Fire Rooster");
Test.assertEquals(sexagenary(2000), "Metal Dragon");
Test.assertEquals(sexagenary(1958), "Earth Dog");
Test.assertEquals(sexagenary(1942), "Water Horse");
Test.assertEquals(sexagenary(1974), "Wood Tiger");
