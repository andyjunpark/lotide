const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  if (array.length === 0 || array.length === 1) {
    return newArray;
  } else {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check other scenarios
console.log(tail([]));
console.log(tail([1]));
console.log(tail([1, 2, 3, 4]));

