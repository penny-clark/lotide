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

//testing zone

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😇Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙅🏻‍♀️❌Assertion failed: ${actual} !== ${expected}`);
  }
};
const testObject = {
  Bluehill: { stars: 1 },
  Akaleri:   { stars: 3 },
  noma:      { stars: 2 },
  elBulli:   { stars: 3 },
  Ora:       { stars: 2, wellThen: [8] },
  Akelarre:  { stars: 5,  okay: true}
}
assertEqual(findKey(testObject, x => x.stars === 2), "noma") 
assertEqual(findKey(testObject, x => x.stars === 1), "Bluehill")
assertEqual(findKey(testObject, x => x.stars === 0), undefined) 
assertEqual(findKey(testObject, x => x.okay === true), "Akelarre") 
assertEqual(findKey(testObject, x => Array.isArray(x.wellThen) === true), "Ora") 
//assertEqual(findKey(testObject, x => x.wellThen === [8]), "Ora") //this language isn't right, keeping here as future challenge

