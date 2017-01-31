const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Use skip() and take() to only get the middle number 2
 * https://www.learnrxjs.io/operators/filtering/skip.html
 * https://www.learnrxjs.io/operators/filtering/take.html
 */

// YOUR CODE
testSubject;


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);

//expected: 2
