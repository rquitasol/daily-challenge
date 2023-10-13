import TestModule from "./Test.js";
const Test = new TestModule();

/**
 2619. Array Prototype Last
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
 */

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  console.log(this);

  if (this.length === 0) return -1;

  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 3];
Test.assertEquals(arr.last(), 3);

/**
 2620. Counter
Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

const counter = createCounter(10);
Test.assertEquals(counter(), 10); // 10
Test.assertEquals(counter(), 11); // 11
Test.assertEquals(counter(), 12); // 12
