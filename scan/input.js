const Rx = require('rxjs');
const prompt = require('prompt');

module.exports = function (reducer, initialValue) {

    //Rxjs subjects allow you to make an observable that can listen to events using next
    const testSubject = new Rx.Subject();

    //Redux (ngrx) can be implemented in one line using the observable scan
    const reduxEngine = testSubject.scan(reducer, initialValue);

    //This will log the state as it gets updated and will ask the user 
    //for the next action.
    const subscribe = reduxEngine.subscribe(function(state) {
        console.log(state);
        ask();
    });

    prompt.start();
    ask();

    function ask() {
        prompt.get(['action'], function (err, result) {

            if (result.action == 'q') {
                process.exit(0);
            }

            testSubject.next({ action: result.action });
        });
    }

}
