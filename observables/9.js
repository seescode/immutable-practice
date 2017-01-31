const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Use toArray() to convert your result into a single array
 */

// YOUR CODE
testSubject.toArray().subscribe(n => console.log(n));


testSubject.next(1);
testSubject.next(2);
testSubject.next(3);
testSubject.complete(); //Note you have to complete your observable