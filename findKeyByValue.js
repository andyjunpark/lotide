// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKeyByValue = function(obj, name){
  for (const item of Object.keys(obj)) {
    if (obj[item] === name) {
      return item;
    }
  }
}

// TEST CODE
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// bestTVShowsByGenre.romance = "The Vow"
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Vow"), "romance");

module.exports = findKeyByValue;