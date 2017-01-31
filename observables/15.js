const Rx = require('rxjs');
const testSubject = new Rx.Subject();


function getResultsFromFakeApi() {
    return Rx.Observable.of(10, 10, 10);
}

/**
 * Use mergeMap for getting values from another observable. 
 * Map the result into an object that looks like this { action: 'fun', payload: 10 }
 * https://www.learnrxjs.io/operators/transformation/mergemap.html
 */

// YOUR CODE
testSubject


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);

/**
 * Expected:
 * { action: 'fun', payload: 10 }
 * { action: 'fun', payload: 10 }
 * { action: 'fun', payload: 10 }
 * { action: 'fun', payload: 20 }
 * { action: 'fun', payload: 20 }
 * { action: 'fun', payload: 20 }
 * { action: 'fun', payload: 30 }
 * { action: 'fun', payload: 30 }
 * { action: 'fun', payload: 30 }
 */