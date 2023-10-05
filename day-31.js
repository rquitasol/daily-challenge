import TestModule from "./Test.js";
const Test = new TestModule();

/**
 Caesar's Cipher
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

Examples
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
Notes
All test input will be a valid ASCII string.
 */

function caesarCipher(s, k) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const indexMap = s.split("").map((char, idx) => {
    const isUpperCase = char.toUpperCase() === char && char !== "-";
    const charToLower = char.toLowerCase();
    if (alphabet.hasOwnProperty(charToLower)) {
      let decodedIdx = alphabet[charToLower] + k;
      while (decodedIdx > 26) {
        decodedIdx -= 26;
      }

      const decoded = Object.keys(alphabet).find(
        (key) => alphabet[key] === decodedIdx
      );
      return isUpperCase ? decoded.toUpperCase() : decoded;
    } else {
      return char;
    }
  });

  return indexMap.join("");
}

Test.assertEquals(caesarCipher("middle-Outz", 2), "okffng-Qwvb");
Test.assertEquals(
  caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5),
  "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
);
Test.assertEquals(
  caesarCipher("A friend in need is a friend indeed", 20),
  "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
);
Test.assertEquals(
  caesarCipher("A Fool and His Money Are Soon Parted.", 27),
  "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe."
);
Test.assertEquals(
  caesarCipher(
    "One should not worry over things that have already happened and that cannot be changed.",
    49
  ),
  "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba."
);
Test.assertEquals(
  caesarCipher(
    "Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.",
    126
  ),
  "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz."
);
