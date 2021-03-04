const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    } 
  }
  return results;
};

//testing zone
//console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

const eqArrays = function(array1, array2) {
  let arrayMatch = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      arrayMatch = false;
    }
  }
  return arrayMatch;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ?
    console.log(`✅😇Assertion passed: ${array1} === ${array2}`) :
    console.log(`🙅🏻‍♀️❌Assertion failed: ${array1} !== ${array2}`);
};

//my test
const testString = "hello";
testArray = testString.split("");
assertArraysEqual(testArray[0], ["h"]);
assertArraysEqual(testArray[1], ["e"]);
assertArraysEqual(testArray[2], ["l"]);
//testing LHL style
assertArraysEqual(letterPositions("hello").e, [1]);