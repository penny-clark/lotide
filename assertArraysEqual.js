const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ?
    console.log(`✅😇 These arrays are EQUAL. ${array1} === ${array2}`) :
    console.log(`🙅🏻‍♀️❌ Theses arrays are NOT EQUAL. ${array1} !== ${array2}`);
};

module.exports = assertArraysEqual;