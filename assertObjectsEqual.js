const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1)
  let objKeys2 = Object.keys(object2)
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const item of objKeys1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      } else {
        return false;
      } 
    }
  } return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === false) {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertArraysEqual;