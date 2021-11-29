// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
// TEST CODE
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1]))
console.log(middle([1, 2]))
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words),["world"]);
assertArraysEqual(middle(["hello", "world", "lighthouse"]),["world"]);