const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
//my test
const testString = "hello";
testArray = testString.split("");
assertArraysEqual(testArray[0], ["h"]);
assertArraysEqual(testArray[1], ["e"]);
assertArraysEqual(testArray[2], ["l"]);
//testing LHL style
assertArraysEqual(letterPositions("hello").e, [1]);