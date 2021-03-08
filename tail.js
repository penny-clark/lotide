const tail = function(array) {
  let newArray = array.slice();
  return newArray.splice(1);
};

module.exports = tail;