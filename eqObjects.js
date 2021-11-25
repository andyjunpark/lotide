// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2)) {
    for (const item of Object.keys(object1)) {
      if (object1[item] === object2[item]) {
        return true
      }
    } return false
  } return true
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, abc), false)
assertEqual(eqObjects(ab, ba), true)