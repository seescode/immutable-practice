let _ = require('lodash');

module.exports = function(input, expect) {
    if (_.isEqual(input, expect)) {
        console.log('correct');
    }
    else {
        console.error('incorrect')
    }
}