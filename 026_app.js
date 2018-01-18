//HTTP Server in NodeJS
var http = require('http');

// Creating a server. Callback function takes request and response as parameters.
http.createServer(function(req, res){ 

    //writing status code and response headers
    res.writeHead(200, { 'Content-Type' : 'text/plain'}); 
    // ending the response, with some final words. '\n' is used to end response in a standard way.
    res.end('Hello World\n'); 

}).listen(1337,'127.0.0.1'); // listening on IP address and Port

