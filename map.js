// TEST FUNCTIONS
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`❌❌❌Assertion Arrays Failed: ${arr1} !== ${arr2}`);
  } else if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Arrays Passed: ${arr1} === ${arr2}`);
  }
};

// ACTUAL FUNCTION
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["hello", "hi"];
const words3 = ["myName"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const mapWords = map(words, word => word[0]);
console.log(mapWords);

const mapWords2 = map(words2, word => word[0]);
const mapWords3 = map(words3, word => word[2]);

assertArraysEqual(mapWords, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(mapWords2, [ 'h', 'h'])
assertArraysEqual(mapWords3, [ 'N' ])