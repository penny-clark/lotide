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

const flatten = function(array) {
  let flattenedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let y = 0; y < array[i].length; y++) {
          flattenedArray.push(array[i][y]);
        }
      } else {
        flattenedArray.push(array[i]);
      }
    }
    //assertArraysEqual is for testing that you get the right result
  //assertArraysEqual(array, flattenedArray);
  return flattenedArray;
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]