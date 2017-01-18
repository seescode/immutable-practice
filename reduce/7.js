const check = require('../check.js');

/**
 * Implement a reducer that inserts, removes, edits a todo from an array
 * Initial value should be [].
 */

var input = [ { action: 'insert', payload: { id: 1, text: 'Wash the car'} },
              { action: 'remove', payload: 1 },
              { action: 'insert', payload: { id: 2, text: 'Take out the trrash'} },
              { action: 'edit', payload: { id: 2, text: 'Take out the trash'} }];

var expect = [{ id: 2, text: 'Take out the trash'}];

// YOUR CODE
var yourCode; 

check(input, yourCode, expect);