const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

// testing cases
const arrayT1 = ["fish", "cat", "dog"]
const arrayT2 = [1, 2, 3, 4]
const arrayT3 = [1]

assertArraysEqual(middle(arrayT1), arrayT1) // ["cat"] arrertArrayEqual = fail
assertArraysEqual(middle(arrayT2), arrayT2) // [2, 3] arrertArrayEqual = fail
assertArraysEqual(middle(arrayT3), arrayT3) // [] assertArrayEqual = fail
