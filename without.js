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


const without = function(source, itemsToRemove) {
  let itemsToKeep = source.slice();
  for (let i = 0; i < itemsToKeep.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (itemsToKeep[i] === itemsToRemove[y]) {
        itemsToKeep.splice(i, 1)
      }
    }
  }
  // using assertArraysEqual to test if my function is returning a different array 
  // and whether the source has been unitentionally altered
  assertArraysEqual(source, itemsToKeep)
  return itemsToKeep;
};

//test cases
without([1, 2, 3], [0]); // => [1, 2, 3]
without([1, 2, 3, 4], [1, 2, 3, 4]); // => []
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]
without(["red", "blue", "green"], ["red", "Blue"]); // => ["blue", "green"] 
without([], []); // => []