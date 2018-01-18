Express in NodeJS - QueryString and Post Parameters
---------------------------------------------------

Express can directly parse query strings in the URL.
We can access them using req.query.paramName

Express cannot pasre the request Body automatically. So we use a middleware called body-parser.
    npm install body-parser --save

We start by Requiring the body-parser
    var bodyparser = require("body-parser");

we get the Url encoded body parser using bodyparser.urlencoded(Object config) method
    var urlencodedParser = bodyparser.urlencoded({extended: false});

we pass the urlencodedParser as a parameter to our POST request handler.
The body-parser parses the request body and adds a new object called 'body' to request, and puts all the data in that 'body' object.
We can acccess the parameters by their names via this 'body' object.

    app.post('/person', urlencodedParser, function(req, res){
        res.send('Thank you');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });


we can get the jsonParser for parsing the JSON that is in the request body
    var jsonParser = bodyparser.json();
Then we pass this as a parameter to our POST request handler. 