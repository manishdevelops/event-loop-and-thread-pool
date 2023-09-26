const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //solution1

    //The problem with this solution is that  node will have to actually load the entire file into memory, because only after that is ready, it can then send that data. Now this is a problem when the file is big, and also when there are ton of requests hitting the server. Because the node process will very quickly  run out of resources and your app will quit working, everything will crash. So, this sol here does work when we are just creating something small locally for ourselves. But in a production ready app you cannot use a piece of code like this 

    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    //solution 2
    //we will create a readable stream.Then as we receive  each chunk of data, we send it to the client as a response which is a writable stream.
    // still there is a problem with this approach. And the problem is that the readable stream that is used to read the file from the disk is much more faster  than actually sending the result  with the response writable stream over the network and this overwhelm the response stream, which cannot handle all all this incoming data so fast And this problem is called backpressure. So backpressure happens  when response cannot send  the data  nearly  as fast as it receiving  it from the file

    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });

    // //when file not found
    // readable.on('error', err => {

    //     //server error
    //     res.statusCode = 500;
    //     res.end("File not found!");
    // });


    //solution 3
    //the pipe operator is available on all readable streams and it allows us to pipe the output of a readable stream into the input of a writable stream And that will fix the  problem of  backpressure

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening....');
});