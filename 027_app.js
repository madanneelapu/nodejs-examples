//Outputting HTML in NodeJS
var http = require('http');
var fs = require('fs'); //fs is required as we are trying to use an externla HTML file. 

// Creating a server. Callback function takes request and response as parameters.
http.createServer(function(req, res){ 

    //writing status code and response headers
    res.writeHead(200, { 'Content-Type' : 'text/html'}); 

    //Reading the file. This gives the file content as binary data
    var html = fs.readFileSync(__dirname + "/027_index.htm");

    //sending the content
    res.end(html); 

}).listen(1337,'127.0.0.1'); // listening on IP address and Port

