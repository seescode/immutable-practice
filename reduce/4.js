const check = require('../check.js');

/**
 * Implement a reducer that inserts the payload into an array.
 * Initial value should be [].
 */

var input = [ { action: 'insert', payload: 1 },
              { action: 'insert', payload: 2 },
              { action: 'insert', payload: 3 } ];


var expect = [1, 2, 3];

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);