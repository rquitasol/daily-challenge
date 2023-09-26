export default class Test {
  assertEquals(val, val2) {
    return val === val2 ? true : console.log(val, "!==", val2);
  }

  assertSimilar(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
      console.log(typeof obj1, "!==", typeof obj2);
      return false;
    }

    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }

      const every = obj1.every((arr, idx) => {
        return arr === obj2[idx];
      });

      if (!every) {
        console.log(JSON.stringify(obj1), "!==", JSON.stringify(obj2));
        return false;
      }
    } else {
      if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
        console.log(JSON.stringify(obj1), "!==", JSON.stringify(obj2));
        return false;
      }
      return true;
    }
  }
}
