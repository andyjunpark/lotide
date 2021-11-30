const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`❌❌❌Assertion Arrays Failed: ${actual} !== ${expected}`);
  } else if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅Assertion Arrays Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertArraysEqual;