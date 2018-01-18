//Node comes with some useful built-in modules. These are called node core modules.
//These can also be accessed using require function.
//In our example we are using a node core module called 'util'.
//note that we are  not using ./ while using the module.
var util = require("util");

util.log("Hello"); // prints log with date and time.

var name = "Madan";
var greeting = util.format("Hello, %s", name); //formating strings

console.log(greeting);