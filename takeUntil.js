const takeUntil = function(array, callback) {
  const result =[]
  for (const item of array) {
    if (!callback(item)) {
      result.push(item)
    } else { 
      break
    }
  }
  return result;
}


// testing zone

//testing functions
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

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArraysEqual(data1, results1) //=> should be not equal

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(data2, results2) // should be not eqaul

// // const data3 = [1, 2, 3];
// // const results3 = takeUntil(data3, () => {}) 
// // assertArraysEqual(data3, results3) // => should be equal

// const data4 = [];
// const results4 = takeUntil(data4, x => x > 1) 
// assertArraysEqual(data4, results4) // => should be equal

// const data5 = [1, 2, 3];
// const results5 = takeUntil(data5, x => x < -1)
// assertArraysEqual(data5, results5) //=> should be equal 