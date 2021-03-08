const assertEqual = require ('../assertEqual');
const eqArrays = require ('../eqArrays')


//test cases
assertEqual(eqArrays([true, "hi"], [true, "hi"]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([0, 1], [0, 1, 2]), false);