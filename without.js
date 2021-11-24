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

const without = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      arr1.splice(i, 1);
      return arr1;
    }
  }
}

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);