const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual'); //remove from reqs in stretch
const assertArraysEqual = require('./assertArraysEqual'); //remove from reqs in stretch

//left to do
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

//stretch listed below 
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects')

const assertObjectsEqual = require('./assertObjectsEqual')


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  countLetters,
  findKey,
  map,
  takeUntil,
  without,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  assertObjectsEqual
};