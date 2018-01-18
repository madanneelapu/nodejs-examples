//FileSystem in NodeJS - Pipes

var fs = require("fs");
var zlib = require("zlib"); //NodeJS built-in library to compress files into .gz files

var readable = fs.createReadStream(__dirname + "/025_greet.txt");

var writeable = fs.createWriteStream(__dirname + "/025_greetcopy.txt");

readable.pipe(writeable);

var compressed = fs.createWriteStream(__dirname + "/025_greet.txt.gz");

var gzip = zlib.createGzip(); //returns a TransformStream which compresses the data

readable.pipe(gzip).pipe(compressed); //writes the compressed data to a .gz file