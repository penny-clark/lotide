const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true and logs a message to the console if the two params are equal", () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it("returns false and console.logs if two params are not equal", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
});

