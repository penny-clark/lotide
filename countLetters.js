const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😇Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let results = {};
  //borrowed this code from the last exercise
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
//testing
const result1 = (countLetters("lighthouse in the house"))
assertEqual(result1["l"], 1); 
const result2 = (countLetters("okeydokey"))
assertEqual(result2["e"], 2); 