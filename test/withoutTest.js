const assertArraysEqual = require('../assertArraysEqual')
const without = require('../without');
//test cases
assertArraysEqual(without([1, 2, 3], [0]), [1, 2, 3]); // => [1, 2, 3]
assertArraysEqual(without([1, 2, 3, 4], [1, 2, 3, 4]), []); // => []
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);// => ["1", "2"]
assertArraysEqual(without(["red", "blue", "green"], ["red", "Blue"]), ["blue", "green"]); // => ["blue", "green"] 
assertArraysEqual(without([], []), []);