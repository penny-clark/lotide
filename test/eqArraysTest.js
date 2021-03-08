const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if the two arrays are equal", () => {
    assert.strictEqual(eqArrays(['fish', 1, 'dog'], ['fish', 1, 'dog']), true);
  });
  it("returns false if the arrays are not equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true is both arrays are empty", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it("returns false if the types are different", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("returns false if the arrays are different lengths", () => {
    assert.strictEqual(eqArrays([0, 1], [0, 1, 2]), false);
  });
});


