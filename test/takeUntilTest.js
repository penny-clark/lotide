const assertArraysEqual = require('../assertArraysEqual')
const takeUntil = require('../takeUntil');
// test cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(data1, results1) //=> should be not equal

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(data2, results2) // should be not eqaul

const data3 = [1, 2, 3];
const results3 = takeUntil(data3, () => {}) 
assertArraysEqual(data3, results3) // => should be equal

const data4 = [];
const results4 = takeUntil(data4, x => x > 1) 
assertArraysEqual(data4, results4) // => should be equal

const data5 = [1, 2, 3];
const results5 = takeUntil(data5, x => x < -1)
assertArraysEqual(data5, results5) //=> should be equal 