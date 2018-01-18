//inheriting from the node event emitter - Part 1
var EventEmitter = require('events');
var util = require('util');

var Greetr = function(){
    this.greeting = "Hello World!";
}

//Greetr object inherits all the methods and properties that are attached to 'prototype'
//of EventEmitter object.
util.inherits(Greetr,EventEmitter); 


Greetr.prototype.greet = function(data){
    console.log(this.greeting+': '+data);
    this.emit('greet',data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log("someone greeted! : "+data)
});

greeter1.greet('Madan');
//greeter1.emit('greet','Madan');