const check = require('../check.js');

/**
 * Implement a reducer that understands increment and decrement.  
 * Initial value should be 0.
 */

var input = [ { action: 'increment' },
              { action: 'decrement' },
              { action: 'increment' } ];


var expect = 1;

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);