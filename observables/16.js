const Rx = require('rxjs');
const testSubject = new Rx.Subject();


function getResultsFromFakeApi() {
    return Rx.Observable.of(10, 10, 10);
}

/**
 * Use mergeMap for getting values from another observable. 
 * Use toArray() to merge all the values being pumped out of the 
 * fake api observable and then sum the total result of everything.
 * https://www.learnrxjs.io/operators/transformation/mergemap.html
 */

// YOUR CODE
testSubject


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);

//Expected: 90