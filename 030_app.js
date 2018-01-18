//Outputting JSON in NodeJS
var http = require('http');

// Creating a server. Callback function takes request and response as parameters.
http.createServer(function(req, res){ 

    //writing status code and response headers
    res.writeHead(200, { 'Content-Type' : 'application/json'}); 

    var obj = {
        firstname:"John",
        lastname:"Doe"
    };

    //sending the content
    //res.end(obj); // will not work. Because the argument for res.end() method must be a String or Buffer.
    //res.end(obj.toString()); //This will also not work. Because, it just gives the toString of Object. not JSON.
    res.end(JSON.stringify(obj)); //Serializing the JSON

}).listen(1337,'127.0.0.1'); // listening on IP address and Port

//Note: JSON serialization and De-Serialization is automatic in JavaScript.