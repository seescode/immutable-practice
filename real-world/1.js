const check = require('../check.js');

/**
 * Select the first element
 */

var input = [
                {
                    'uuid': '68645eef-338b-4570-9ca8-63275cdb61e8',
                    selected: false
                },
                {
                    'uuid': '22ed45a4-3ad2-4b4e-9abc-4a22e79a21c7',
                    selected: false                    
                },
                {
                    'uuid': '50f91419-fdc0-450b-bdb6-820cdee85ca4',
                    selected: false
                },
                {
                    'uuid': 'e5d50e31-1700-4766-a1d8-878e02b59ff1',
                    selected: false
                }
            ];


var expect = [];
expect[0] = {
                'uuid': '68645eef-338b-4570-9ca8-63275cdb61e8',
                selected: true
            };
expect[1] = input[1];
expect[2] = input[2];
expect[3] = input[3];



// YOUR CODE
var yourCode; 

check(input, yourCode, expect);