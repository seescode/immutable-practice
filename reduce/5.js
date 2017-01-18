const check = require('../check.js');

/**
 * Implement a reducer that inserts and removes from an array.
 * Initial value should be [].
 */

var input = [ { action: 'insert', payload: 1 },
              { action: 'remove', payload: 1 },
              { action: 'insert', payload: 3 } ];


var expect = [3];

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);