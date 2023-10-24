export default class Test {
  assertEquals(val, val2) {
    console.log("Passed: " + val, "--" + val2);
    return val === val2 ? true : console.log(val, "!==", val2);
  }

  assertSimilar(obj1, obj2) {
    const areSimilar = (a, b) => {
      if (typeof a !== typeof b) {
        console.error("Failed: ", typeof a, "!==", typeof b);
        return false;
      }

      if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
          return false;
        }

        for (let i = 0; i < a.length; i++) {
          if (!areSimilar(a[i], b[i])) {
            return false;
          }
        }
      } else if (typeof a === "object" && a !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
          return false;
        }

        for (const key of keysA) {
          if (!keysB.includes(key) || !areSimilar(a[key], b[key])) {
            return false;
          }
        }
      } else {
        if (a !== b) {
          console.error(
            "Failed: ",
            JSON.stringify(a),
            "!==",
            JSON.stringify(b)
          );
          return false;
        }
      }

      return true;
    };

    console.log("Passed: " + obj1, "  --  " + obj1);
    return areSimilar(obj1, obj2);
  }
}
