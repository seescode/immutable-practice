const Rx = require('rxjs');
const testSubject = new Rx.Subject();

testSubject.map(n => n + 1).subscribe(function(data) {
    console.log(data);
});

testSubject.next(1);
testSubject.next(2);
testSubject.next(3);
