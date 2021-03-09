const countLetters = function (string) {
  let results = {};
  for (const item of string) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = countLetters;