//Outputting HTML with Streams in NodeJS to improve Performance
var http = require('http');
var fs = require('fs'); //fs is required as we are trying to use an externla HTML file. 

// Creating a server. Callback function takes request and response as parameters.
http.createServer(function(req, res){ 

    //writing status code and response headers
    res.writeHead(200, { 'Content-Type' : 'text/html'}); 

    //reading file via stream and piping it ro response.
    fs.createReadStream(__dirname + "/027_index.htm").pipe(res);

    

}).listen(1337,'127.0.0.1'); // listening on IP address and Port

