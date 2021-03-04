//helper function eqArrays
const eqArrays = function(array1, array2) {
  let arrayMatch = true;
  if (array1.length !== array2.length) {
    arrayMatch = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      arrayMatch = false;
    }
  }
  return arrayMatch;
};

//helper function eqObjects
const eqObjects = function(object1, object2) {
  for (const key in object1) {
    for (const key in object2) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        let compare = eqArrays(object1[key], object2[key]) 
          if (compare === false) {
          return false;
          }
      } else { 
        if (object1[key] !== object2[key]) {
        return false;
        }
      }
    }
  }
  return true;
};

//assertObjectsEqual function
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  eqObjects(object1, object2) ?
    console.log(`✅😇 These objects are EQUAL. Original: ${inspect(object1)}} === Result: ${inspect(object2)}`) :
    console.log(`🙅🏻‍♀️❌ Theses objects are NOT EQUAL. Original: ${inspect(object1)} !== Result: ${inspect(object2)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba) // => equal
assertObjectsEqual(ab, abc) // => not equal
