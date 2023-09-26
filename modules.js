
// console.log(arguments);

//with this you can check that check that actually inside a wrapper function
// console.log(require('module').wrapper);


//module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
//alternate for doing module.exports is to add properties  to the exports object itself.

// this is exports modules now
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 6));
//destructuring
const { add, multipy, divide } = require('./test-module-2');
console.log(add(1, 1));

// Caching
// the top-level code in a module is executed only once when the module is first required or imported. This behavior is by design and is a fundamental aspect of how Node.js modules work. because of caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();

