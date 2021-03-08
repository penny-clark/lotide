const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 'cat' for ['fish', 'cat', 'dog]", () => {
    assert.deepEqual(middle(['fish', 'cat', 'dog']), ['cat']);
  });
  it("returns [] if argument array has two or fewer items", () => {
    assert.deepEqual(middle(['cat', 'dog']), []);
  });
  it("does not change the original array", () => {
    const testing = [5, 6, 7]
    assert.notEqual(middle(testing), testing); 
  });
});
