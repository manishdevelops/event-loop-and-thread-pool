const http = require('http');
const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        //every time you have to write super() when you extend a class so that we can get the access to all methods of the parent class.
        super();
    }
}
const myEmitter = new Sales();


// on is the event observer that observe the emitter and wait until it emits the newSale event 
// if there are more than one event listener of the same event then they will execute in the same order as you have written them. 
myEmitter.on('newSale', () => {
    console.log('There was a new  sale');
})

myEmitter.on('newSale', () => {
    console.log('Customer is Manish');
})

myEmitter.on('newSale', stock => {
    console.log(`Here are the new ${stock} items left in the  stock`);
})

//event object that emit events
//we can also pass the arguemnts that is optional
myEmitter.emit('newSale', 9);

////////////////////////////

const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Request received');
    res.end('Request received');
});

server.on('request', (req, res) => {
    console.log('Another request');
});

server.on('close', (req, res) => {
    console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for REQUESTS.....');
});

