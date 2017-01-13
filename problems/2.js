const check = require('../check.js');

/**
 * Problem: Increment by 1 all x values in input
 */

var input = [{ x: 1, y: 1 }, 
             { x: 2, y: 1 }, 
             { x: 3, y: 1 }];

var expect = [{ x: 2, y: 1 }, 
              { x: 3, y: 1 }, 
              { x: 4, y: 1 }];

// YOUR CODE
var yourCode = input.map((n) => { 
    return {x: n.x + 1, y: n.y } 
})

check(input, yourCode, expect);