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
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  countLetters: countLetters,
  findKey: findKey,
  map: map,
  takeUntil: takeUntil,
  without: without,
  flatten: flatten,
  countOnly: countOnly,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual
};