'use strict'

let meld = require('meld')

let toMeldObj = {
    doSomething: function(a, b) {
        return a + b;
    }
};

// Call a function after toMeldObj.doSomething returns
let remover = meld.after(toMeldObj, 'doSomething', (result) =>{
    console.log('after toMeldObj.doSomething returned: ' + result);
});

remover = meld.before(toMeldObj, 'doSomething', (result) => {
    console.log('before toMeldObj.doSomething returned: ' + result);
});


toMeldObj.doSomething(1, 2); // Logs: "toMeldObj.doSomething returned: 3"

// remover.remove();

// toMeldObj.doSomething(1, 2); // Nothing logged
