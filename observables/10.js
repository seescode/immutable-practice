const Rx = require('rxjs');
const testSubject = new Rx.Subject();


function getResultsFromFakeApi() {
    return Rx.Observable.of(10, 10, 10);
}

/**
 * Use mergeMap for getting values from another observable 
 * https://www.learnrxjs.io/operators/transformation/mergemap.html
 */

// YOUR CODE
testSubject


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);
