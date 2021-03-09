const without = function(source, itemsToRemove) {
  let itemsToKeep = source.slice();
  for (let i = 0; i < itemsToKeep.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (itemsToKeep[i] === itemsToRemove[y]) {
        itemsToKeep.splice(i, 1)
      }
    }
  }
  return itemsToKeep;
};

module.exports = without;