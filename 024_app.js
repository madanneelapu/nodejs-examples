//FileSystem in NodeJS - Streams

var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/024_greet.txt",
                    { //Options to set for stream
                        encoding:'utf8',
                        highWaterMark:16*1024
                    });
 //The default size of the buffer is 64KB. We can use 'highWaterMark' option to reduce the buffer size.


var writeable = fs.createWriteStream(__dirname + "/024_greetcopy.txt");

 //'data' is an event on readable stream to which we can listen 
 //when the buffer is filled with a chuck(piece) of data from the stream.
readable.on('data',function(chunk){
    //console.log(chunk.length); //display length of each chunk
    console.log(chunk); 

    //write the chunk(piece) of data into another file
    writeable.write(chunk);
});

//Listening for a stream to send data and writing that data to another stream is very common.
//We have a faster and better way to do it in nodejs.