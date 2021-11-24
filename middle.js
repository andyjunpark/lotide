// TEST/ASSERTION FUNCTIONS
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
const middle = function(arr) {
  middleArr = []
  if (arr.length < 3) {
    return middleArr
  } else if (arr.length % 2 !== 0) {
    middleArr.push(arr[((arr.length + 1) / 2) - 1]);
    return middleArr
  } else if (arr.length % 2 === 0) {
    middleArr.push(arr[(arr.length / 2) - 1]);
    middleArr.push(arr[(arr.length / 2)]);
    return middleArr
  }
};

// TEST CODE
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1]))
console.log(middle([1, 2]))
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words),["world"]);
assertArraysEqual(middle(["hello", "world", "lighthouse"]),["world"]);