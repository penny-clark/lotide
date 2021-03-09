 const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  eqObjects(object1, object2) ?
    console.log(`✅😇 These objects are EQUAL. Original: ${inspect(object1)} === Result: ${inspect(object2)}`) :
    console.log(`🙅🏻‍♀️❌ Theses objects are NOT EQUAL. Original: ${inspect(object1)} !== Result: ${inspect(object2)}`);
};

module.exports = assertObjectsEqual;