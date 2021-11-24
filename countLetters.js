// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(str) {
  const countedLetters = {};
  let splitStr = str.split("")
  for (const letters of splitStr) {
    if (letters !== ' ') {
      if (countedLetters[letters]) {
        countedLetters[letters] += 1;
      } else {
        countedLetters[letters] = 1;
      }
    }  
  } return countedLetters;
};

// TEST CODE
console.log(countLetters('hello my name'));
console.log(countLetters('    '));
console.log(countLetters('aaaaa'));
console.log(countLetters("lighthouse in the house"));