const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map')

//test cases
const someWords = ["let's", "twist", "again", "like", "we", "did", "last", "summer"]

const results1 = map(someWords, word => word[0]);
const results2 = map(someWords, word => word); 
const results3 = map(someWords, word => word + " boldly")
const results4 = map(someWords, word => word.length)

assertArraysEqual(someWords, results1) // => not equal
assertArraysEqual(someWords, results2) // => equal
assertArraysEqual(someWords, results3) // => not equal
assertArraysEqual(someWords, results4) // => not equal