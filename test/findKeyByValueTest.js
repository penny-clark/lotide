const assertEqual = require('../assertEqual'); 
const findKeyByValue = require ('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: ["Brooklyn Nine-Nine", "Kaguya-Sama Love is War"],
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Kaguya-Sama Love is War"), "comedy");