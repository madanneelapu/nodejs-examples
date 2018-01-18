//FileSystem in NodeJS - Buffers

//require file system JS from Node
var fs = require("fs");

//Read file synchronously
var greet = fs.readFileSync(__dirname + '/023_greet.txt', 'utf8');
console.log(greet);

//Read file Asynchronously - Best Practice - Better Performance
var greet2 = fs.readFile(__dirname + '/023_greet.txt', 'utf8',
    function(err, data ){
        console.log(data);
})

console.log("Done!");


//The problem with this approach is that it uses buffers.
//If that file is very large and many people are using this program, 
//then you will end up with many buffers that are large in size.

//So we need a way to minimize how much data we are working with at any one time inside the Buffer.
