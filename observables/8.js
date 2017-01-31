const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Automatically startwith the value 10 and always map the result to +1. 
 * https://www.learnrxjs.io/operators/combination/startwith.html
 */

// YOUR CODE
testSubject;


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);
