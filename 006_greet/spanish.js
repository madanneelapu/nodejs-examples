//Require function loads JSON file and converts to a JSON object
var greetings = require("./greetings.json");

var greet = function(){
    console.log(greetings.es);
};

module.exports = greet;