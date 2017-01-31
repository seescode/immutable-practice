const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Use mapTo to map all the results to 10 and only get the first one by using first()
 * https://www.learnrxjs.io/operators/transformation/mapto.html
 * https://www.learnrxjs.io/operators/filtering/first.html
 */

// YOUR CODE
testSubject;


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);

//expected: 10
