const flatten = function(array) {
  let flattenedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (let y = 0; y < array[i].length; y++) {
          flattenedArray.push(array[i][y]);
        }
      } else {
        flattenedArray.push(array[i]);
      }
    }
  return flattenedArray;
};

module.exports = flatten;