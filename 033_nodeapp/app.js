//Express in NodeJS

//Requiring express
var express = require("express");

//Creating an express app
var app = express();

//Retrieveing Environment variable. If not present defaulting to 3000
var port = process.env.PORT || 3000;

//Mapping GET request of '/' URL. Automatically sets Content-Type to text/html.
app.get('/', function(req, res){
    res.send(`<html>
                <head></head>
                <body>
                    <h1>Hello world</h1>
                </body>
              </html>`);
});

//Mapping GET request of '/api' URL. Automatically sets Content-Type to application/json.
app.get('/api',function(req, res){
    res.json({ firstname:"John", lastname:"Doe" });
});


//Mapping GET request of '/greet/<someParam>' URL.
app.get('/greet/:name', function(req, res){
    res.send(`<html>
                <head></head>
                <body>
                    <h1>Hello ${req.params.name}</h1>
                </body>
              </html>`);
});

//server Listening on port
app.listen(port);