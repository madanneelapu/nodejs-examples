//using classes to create modules in nodejs

'use strict'

var Greetr = require("./019_greetr");

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log("someone greeted! : "+data)
});

greeter1.greet('Madan');
