const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (Array.isArray(object[key])) {
      for (const item of object[key]) {
        if (item === value) {
          return key;
        }
      }
    }
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;