const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Use last() to only get the last element
 * https://www.learnrxjs.io/operators/filtering/last.html
 */

// YOUR CODE
testSubject;


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);
testSubject.complete();

//expected: 3
