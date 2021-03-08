const assert = require('chai').assert;
const assertArraysEqual = require('../eqArrays');

describe("#assertArraysEqual", () => {
  it("returns true if the two arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([true, "hi"], [true, "hi"]), true);
  });
  it("returns false if the arrays are not equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false if one of the arrays is empty", () => {
    assert.strictEqual(assertArraysEqual([1], []), false);
  });
  it("returns false if the arrays are different lengths", () => {
    assert.strictEqual(assertArraysEqual([0, 1], [0, 1, 2]), false);
  });
});

