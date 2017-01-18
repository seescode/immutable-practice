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
var yourCode = input.reduce(function(state, next) {
    switch (next.action) {
        case 'increment':
            return state + 1;
        default:
            return state
    }
}, 0);

check(input, yourCode, expect);