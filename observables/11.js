const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Use first() to get only the first element
 * https://www.learnrxjs.io/operators/filtering/first.html
 */

// YOUR CODE
testSubject;


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);

//expected: 1
