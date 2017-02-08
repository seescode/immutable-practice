const reselect = require('reselect');

var data = {
    answers: [
        {id: 1, selected: 'yes', text: 'question 1'},
        {id: 2, selected: 'no', text: 'question 2'}
    ]
};

//Use reselect to compute the component model
var answerComponentSelector = reselect.createSelector( /* your code here */);

console.log(answerComponentSelector(data));

/**
 * Expected:
 * [
 *  {answerId: 1, selected: true, title: 'abc'},
 *  {answerId: 2, selected: false, title: 'def'}
 * ]
 */