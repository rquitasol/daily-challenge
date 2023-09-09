export default class Test {
  assertEquals(val, val2) {
    return val === val2 ? true : console.log(val, "!==", val2);
  }

  assertSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.some((arr, idx) => {
      return arr === arr2[idx];
    });
  }
}
