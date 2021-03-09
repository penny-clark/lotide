const eqArrays = require ('./eqArrays');

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

module.exports = eqObjects;
