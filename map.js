const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
}

//testing zone

//test functions
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
  console.log(`✅😇 These arrays are EQUAL. Original: ${array1} === Result: ${array2}`) :
  console.log(`🙅🏻‍♀️❌ Theses arrays are NOT EQUAL. Original: ${array1} !== Result: ${array2}`);
};

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