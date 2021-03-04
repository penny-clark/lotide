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

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ?
    console.log(`✅😇 These arrays are EQUAL ${array1} === ${array2}`) :
    console.log(`🙅🏻‍♀️❌ Theses arrays are NOT EQUAL ${array1} !== ${array2}`);
};

//test cases
assertArraysEqual([true, "hi"], [true, "hi"]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => not equal
assertArraysEqual([1], []); // => not equal
assertArraysEqual([1, 2], [1, 2, 3]) //=> not equal