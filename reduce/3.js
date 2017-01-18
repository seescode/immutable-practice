const check = require('../check.js');

/**
 * Implement a reducer that understands increment and decrement 
 * and uses the payload as the amount to increment or decrement.  
 * Initial value should be 0.
 */

var input = [ { action: 'increment', payload: 2 },
              { action: 'decrement', payload: 5 },
              { action: 'increment', payload: 4 } ];


var expect = 1;

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);