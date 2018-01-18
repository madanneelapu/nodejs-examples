//Outputting HTML using Templates in NodeJS
var http = require('http');
var fs = require('fs'); //fs is required as we are trying to use an externla HTML file. 

// Creating a server. Callback function takes request and response as parameters.
http.createServer(function(req, res){ 

    //writing status code and response headers
    res.writeHead(200, { 'Content-Type' : 'text/html'}); 

    //Reading the file. Setting the Character set. This will return the file content as a String.
    var html = fs.readFileSync(__dirname + "/028_index.htm" , "utf8");

    var message = "Hello World...";
    html = html.replace("{Message}",message);
    
    //sending the content
    res.end(html); 

}).listen(1337,'127.0.0.1'); // listening on IP address and Port

