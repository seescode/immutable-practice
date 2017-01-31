const Rx = require('rxjs');
const testSubject = new Rx.Subject();

// Have some code that reactively saves the 
// fullname of the user and logs it.  Also 
// reactively save the total number of pets.

// YOUR CODE
testSubject


testSubject.next({
    firstName: 'Henry',
    lastName: 'Smit h',
    age: 20,
    pets: [ 'cat', 'dog']
});
testSubject.next({
    firstName: 'Henry',
    lastName: 'Smith',
    age: 30,    
    pets: [ 'cat', 'dog', 'chicken']
});
