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
