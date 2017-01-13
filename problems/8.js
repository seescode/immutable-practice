const check = require('../check.js');

/**
 * Problem: Use Object.assign to update the value x
 */

var input = {
    x: 1,
    y: {
        z: 3
    }
}

var expect = {
    x: 2,
}
expect.y = input.y;


// YOUR CODE
var yourCode;

check(input, yourCode, expect);