/**
    Seven Boom!
    Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

    Examples
    sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
    // 7 contains the number seven.
    sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
    // None of the items contain 7 within them.
    sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
    // 97 contains the number seven.
Notes
 */

function sevenBoom(arr) {
  const hasSeven = arr.some((val) => {
    if (val.toString().split("").includes("7")) {
      return true;
    }
  });
  return hasSeven ? "Boom" : "there is no 7 in the array";
}

console.log(sevenBoom([2, 6, 7, 9, 3]), "Boom!");
console.log(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array");
console.log(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array");
console.log(sevenBoom([76, 55, 44, 32]), "Boom!");
console.log(sevenBoom([35, 4, 9, 37]), "Boom!");

/**
     Number of Boomerangs
    A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

    Some boomerang examples:
    [3, 7, 3], [1, -1, 1], [5, 6, 5]
    Create a function that returns the total number of boomerangs in an array.
    To illustrate:
    [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
    // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
    Be aware that boomerangs can overlap, like so:

    [1, 7, 1, 7, 1, 7, 1]
    // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
    Examples
    countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
    countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
    countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

    Notes
    [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
 */

function countBoomerangs(arr) {
  const boomerangs = [];
  arr.forEach((val, idx) => {
    const subArr = arr.slice(idx, idx + 3);
    if (subArr.length === 3) {
      if (subArr[0] === subArr[2] && subArr[0] !== subArr[1]) {
        boomerangs.push(subArr);
      }
    }
  });
  console.log("boomerang:", boomerangs);
  return boomerangs.length;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2);
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1);
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0);
console.log(countBoomerangs([5, 9, 5, 9, 5]), 3);
console.log(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3);
console.log(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0);
console.log(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2);
console.log(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2);
console.log(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1);
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3);
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5);
console.log(countBoomerangs([5, 5, 5]), 0);

/**
Tower of Hanoi
There are three towers. The objective of the game is to move all the disks over to tower #3,
 but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi
Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7
towerHanoi(5) ➞ 31
towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.
 */

function towerHanoi(discs) {
  return 2 ** discs - 1;
}

console.log(towerHanoi(3), 7);
console.log(towerHanoi(5), 31);
console.log(towerHanoi(8), 255);
console.log(towerHanoi(19), 524287);
console.log(towerHanoi(9), 511);
console.log(towerHanoi(13), 8191);
console.log(towerHanoi(0), 0);
