findKey = function(object, callback) {
  for (const key in object) {
    //can't figure out how to get it to look for the value in an array, but keeping this here as a future goal
      // if (Array.isArray(object[key])) {
      //   for (const item of object[key]) {
      //     if (callback(item)) {
      //       return key;
      //     }
      //   }
      // }
  if (callback(object[key])) {
    return key;
    }
  }
};

module.exports = findKey 
