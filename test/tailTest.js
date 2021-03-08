const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("does not change the original array", () => {
    const testing = [5, 6, 7]
    assert.notEqual(tail(testing), testing); 
  });
});