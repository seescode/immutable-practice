const check = require('../check.js');

/**
 * Implement a reducer that understands increment.  
 * Initial value should be 0.
 */

var input = [ { action: 'increment' },
              { action: 'increment' },
              { action: 'increment' } ];


var expect = 3;

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);