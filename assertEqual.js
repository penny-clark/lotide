const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😇Assertion passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🙅🏻‍♀️❌Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual