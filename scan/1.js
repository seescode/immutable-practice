const input = require('./input.js');


/**
 * Implement a reducer that understands increment.  
 * Initial value should be 0.
 */
var yourCode = function(state, next) {
    switch (next.action) {
        case 'increment':
            return state + 1;
        default:
            return state;
    }
};
var yourInitialValue = 0;


input(yourCode, yourInitialValue);