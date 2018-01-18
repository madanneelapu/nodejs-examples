//Express in NodeJS - Templates and Template Engines - EJS

//Requiring express
var express = require("express");
//Requiring body-parser
var bodyparser = require("body-parser");

//Creating an express app
var app = express();

//getting the urlencodedParser for parsing request body
var urlencodedParser = bodyparser.urlencoded({extended: false});

//getting the jsonParser for parsing the JSON in the request body
var jsonParser = bodyparser.json();

//Retrieveing Environment variable. If not present defaulting to 3000
var port = process.env.PORT || 3000;

//Any Request for /assets/* will be pointed to 'public' folder
app.use('/assets', express.static(__dirname + '/public'));

//Custom Middeware for all URLs matching /* path
app.use('/',function(req, res, next){ 
    console.log('Request Url: '+req.url); //logging the request URL
    next(); //invoking the next Middleware
});

//setting the view engine to EJS
app.set('view engine','ejs');

//Mapping GET request of '/' URL. Automatically sets Content-Type to text/html.
app.get('/', function(req, res){
    res.render('index'); //the 'view name' and 'view engine name' combine to form the file name.; index.ejs.
});

//Mapping GET request of '/greet/<someParam>' URL.
app.get('/greet/:name', function(req, res){
    res.render('greet', { ID: req.params.name, GENDER: req.query.gender }); //Adding model to view
});

//accesing the parameters
app.post('/person', urlencodedParser, function(req, res){
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

//accesing the JSON Body
app.post('/personjson', jsonParser, function(req, res){
    res.send('Thank you for the JSON data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

//Mapping GET request of '/api' URL. Automatically sets Content-Type to application/json.
app.get('/api',function(req, res){
    res.json({ firstname:"John", lastname:"Doe" });
});

//server Listening on port
app.listen(port);