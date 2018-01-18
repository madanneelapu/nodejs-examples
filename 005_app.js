//Module patterns

//returning the function itself as an 'exports' obj
var greet1 = require("./005_greet1");
greet1();

//adding function as a property to existing 'exports' obj
var greet2 = require("./005_greet2").greet;
//greet2.greet();
greet2();

//returning an object created using the constructor function as an 'exports' obj
var greet3 = require("./005_greet3");
greet3.greet();

//we are trying to change the value of the greeting property of the returned object.
greet3.greeting = "Updated Hello World!";

//then we are trying to obtain the required module 005_greet3 again.
//because this module is called earlier using the require method, the returned object from previous call
//will be cached and the same object will be passed back. 
//This way Node makes sure it executes a module only once; even though a module is called more than once. 
//This applies even across files.
//Because it is an object, it will be passed by reference. 
//So the change we made to greeting property will reflect now.
var greet3b = require("./005_greet3");
greet3b.greet();


//returning the constructor function itself as an 'exports' obj
var Greet4 = require("./005_greet4");
var grtr = new Greet4();
grtr.greet();
grtr.greeting="newly updated Hello World!";


var Greet4b = require("./005_greet4");
var grtrb = new Greet4b();
grtrb.greet();


//returning an object using revealing module pattern as a 'exports' obj
var greet5 = require("./005_greet5");
greet5.greet();
