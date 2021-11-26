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
const takeUntil = function(array, callback) {
  newArr = []
  index = 0
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      index = i;
      newArr = array.slice(0, index);
      return newArr;
    }
  }
}


// TEST CODES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])