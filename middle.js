const middle = function(array) {
  const arrayCenter = [];
  if (array.length <= 2) {
     return arrayCenter;
  } else if (array.length % 2 === 0) {
    arrayCenter.push(array[array.length / 2 - 1]);
    arrayCenter.push(array[array.length / 2])
  } else {
    arrayCenter.push(array[Math.round(array.length / 2) - 1])
  }
  return arrayCenter;
};

module.exports = middle;