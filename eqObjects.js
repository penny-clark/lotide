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



//testing zone

//test functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😇Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️❌Assertion failed: ${actual} !== ${expected}`);
  }
};


//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
