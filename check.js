let _ = require('lodash');

module.exports = function(input, yourCode, expect) {

    if (input === yourCode) {
        console.error('incorrect - mutating the input')
    }
    else if (_.isEqual(yourCode, expect)) {
        console.log('correct');
    }
    else {
        console.error('incorrect')
    }
}