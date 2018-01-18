//node looks for 006_greet.js in the current directory. If not found, then node looks for 
//006_greet directory. Inside that folder node looks for index.js.
//In our example, inside index.js we are using require again.
var greet = require("./006_greet");  

greet.english();
greet.spanish();