const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1]))
console.log(middle([1, 2]))
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(middle(words),["world"]);
assertArraysEqual(middle(["hello", "world", "lighthouse"]),["world"]);