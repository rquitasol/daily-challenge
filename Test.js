export default class Test {
  assertEquals(val, val2) {
    return val === val2 ? true : console.log(val, "!==", val2);
  }

  assertSimilar(obj1, obj2) {
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }

      return obj1.some((arr, idx) => {
        return arr === obj2[idx];
      });
    } else {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
  }
}
