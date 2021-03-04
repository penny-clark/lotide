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

//testing zone
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😇Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: ["Brooklyn Nine-Nine", "Kaguya-Sama Love is War"],
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Kaguya-Sama Love is War"), "comedy");