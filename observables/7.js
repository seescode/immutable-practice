const Rx = require('rxjs');
const testSubject = new Rx.Subject();


/**
 * Implement catch()
 * https://www.learnrxjs.io/operators/error_handling/catch.html
 */

// YOUR CODE
testSubject.map(n => n.age + 1)
    .subscribe(function(data) {
        console.log(data);
    });


testSubject.next({age: 3});
testSubject.next();

