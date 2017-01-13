const check = require('../check.js');

/**
 * Increment by 1 all values in input
 */

var input = [1, 2, 3];
var expect = [2, 3, 4];

// YOUR CODE
var yourCode; 
yourCode = input.map((x) => x + 1);

check(input, yourCode, expect);