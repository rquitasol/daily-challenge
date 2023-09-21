import TestModule from "./Test.js";
const Test = new TestModule();

/**
    How Many Unique Styles?
    There are many different styles of music and many albums exhibit multiple styles. 
    Create a function that takes an array of musical styles from albums and returns how many styles are unique.

    Examples
    uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
    ]) ➞ 9

    uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
    ]) ➞ 7
 */

function uniqueStyles(albums) {
  return new Set(albums.join(",").split(",")).size;
}

Test.assertEquals(
  uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal",
  ]),
  9
);

Test.assertEquals(
  uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul",
  ]),
  7
);

Test.assertEquals(
  uniqueStyles([
    "Black Metal,Avantgarde",
    "Funk",
    "Deep House,House",
    "Big Band",
    "Punk",
  ]),
  7
);

Test.assertEquals(uniqueStyles(["Funk", "Funk", "Funk", "Funk", "Funk"]), 1);

/**
    Burglary Series (15): Number of Occurrences
    To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
    Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

    Examples
    countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
    }) ➞ { moron: 2, scumbag: 1, idiot: 2 }

    countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c:"moron"
    }) ➞ { moron: 3 }

    countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag"
    }) ➞ { idiot: 1, scumbag: 1 }
 */

function countNumberOfOccurrences(obj) {
  const result = {};

  Object.values(obj).forEach((value) => {
    if (result.hasOwnProperty(value)) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  });
  return result;
}

const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" };
const obj2 = { a: "pig", b: "pig", c: "pig" };
const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" };

Test.assertSimilar(countNumberOfOccurrences(obj), {
  moron: 2,
  scumbag: 1,
  idiot: 2,
});
Test.assertSimilar(countNumberOfOccurrences(obj2), { pig: 3 });
Test.assertSimilar(countNumberOfOccurrences(obj3), {
  sleazball: 1,
  pervert: 3,
});

/**
    Instances of the Fibonacci Sequence
    Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.
    Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.
    If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

    Examples
    fibSeq(4) ➞ [0, 1, 1, 2]
    fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]
    fibSeq(0) ➞ []
 */

function fibSeq(end) {
  if (end === 0) {
    return [];
  }

  if (!end) {
    return "An empty input has to return undefined";
  }

  let prev = 0;
  let next = 1;
  let total;
  const result = [];
  for (let n = 0; n < end; n++) {
    result.push(prev);
    total = prev + next;
    prev = next;
    next = total;
  }

  return result;
}

Test.assertSimilar(fibSeq(2), [0, 1]);
Test.assertSimilar(fibSeq(4), [0, 1, 1, 2]);
Test.assertSimilar(fibSeq(0), []);
Test.assertSimilar(fibSeq(7), [0, 1, 1, 2, 3, 5, 8]);
Test.assertSimilar(
  fibSeq(),
  undefined,
  "An empty input has to return undefined"
);
Test.assertSimilar(
  fibSeq(20),
  [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181,
  ]
);
Test.assertSimilar(fibSeq(1), [0]);
