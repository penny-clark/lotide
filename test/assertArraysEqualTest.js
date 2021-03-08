const assertArraysEqual = require('../assertArraysEqual');

//test cases
assertArraysEqual([true, "hi"], [true, "hi"]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => not equal
assertArraysEqual([1], []); // => not equal
assertArraysEqual([1, 2], [1, 2, 3]) //=> not equal