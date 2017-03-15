'use strict'

let meld = require('meld')

let toMeldObj = {
    doSomething: (a, b) =>{
        console.log('in doSomething')
        return a + b;
    }
};

// Call a function after toMeldObj.doSomething returns
meld.after(toMeldObj, 'doSomething', (result) =>{
    console.log('after toMeldObj.doSomething returned: ' + result);
});

meld.before(toMeldObj, 'doSomething', (result) => {
    console.log('before toMeldObj.doSomething returned: ' + result);
});

toMeldObj.doSomething(1, 2); // Logs: "toMeldObj.doSomething returned: 3"
