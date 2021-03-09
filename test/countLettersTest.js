const assertEqual = require('../assertEqual')
const countLetters = require('../countLetters');
//testing 
const result1 = (countLetters("lighthouse in the house"))
assertEqual(result1["l"], 1); 
const result2 = (countLetters("okeydokey"))
assertEqual(result2["e"], 2); 