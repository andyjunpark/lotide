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
const letterPositions = function(sentence) {
  const results = {};
  let splitSentence = sentence.split("")
  for (let i = 0; i < splitSentence.length; i++) {
    if (!results[splitSentence[i]]) {
      results[splitSentence[i]] = [i]
    } else {
      results[splitSentence[i]].push(i)
    }
  } return results;
};

// TEST CODE
// assertArraysEqual(letterPositions("hello").e, [1]);

// console.log(letterPositions('hello'));
// console.log(letterPositions('heeeee'));
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;
