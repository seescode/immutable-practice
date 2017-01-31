const Rx = require('rxjs');
const testSubject = new Rx.Subject();

// Have some code that reactively saves the 
// fullname of the user and logs it. 

// YOUR CODE
testSubject


testSubject.next({
    firstName: 'Henry',
    lastName: 'Smit h',
    age: 20
});
testSubject.next({
    firstName: 'Henry',
    lastName: 'Smith',
    age: 30    
});
