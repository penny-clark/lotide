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


const middle = function(array) {
  const arrayCenter = [];
  if (array.length <= 2) {
    //uncomment for testing
    //assertArraysEqual(array, arrayCenter);
     return arrayCenter;
  } else if (array.length % 2 === 0) {
    arrayCenter.push(array[array.length / 2 - 1]);
    arrayCenter.push(array[array.length / 2])
  } else {
    arrayCenter.push(array[Math.round(array.length / 2) - 1])
  }
  //uncomment for testing 
  //assertArraysEqual(array, arrayCenter);
  return arrayCenter;
};

 //testing cases
//console.log(middle(["fish", "cat", "dog"])) // ["cat"] arrertArrayEqual = fail
//console.log(middle([1, 2, 3, 4])) // [2, 3] arrertArrayEqual = fail
//console.log(middle([1])) // [] assertArrayEqual = fail
