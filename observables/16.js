const Rx = require('rxjs');
const testSubject = new Rx.Subject();


function getResultsFromFakeApi() {
    return Rx.Observable.of(10, 10, 10);
}

/**
 * Use mergeMap for getting values from getResultsFromFakeApi(). 
 * Use reduce() to sum the values.
 * https://www.learnrxjs.io/operators/transformation/mergemap.html
 */

// YOUR CODE
testSubject

testSubject.next();
testSubject.next();
testSubject.next();
testSubject.complete();

//Expected: 90