//inheriting from the node event emitter - Part 2

//in the previous part-1 example, we have inherited all the 
//methods and properties that are attached to 'prototype' of EventEmitter object.
//But we were not able to inherit the EventEmitter specific properties 
//i.e.; properties attached to EventEmitter 'this' reference when EventEmitter function constructor 
//is called.
var EventEmitter = require('events');
var util = require('util');

var Greetr = function(){
    //causes the EventEmitter function constructor to run, with 'this' reference pointing to 
    //the 'newly created Greetr object'. Thereby setting the EventEmitter specific properties to
    //the 'newly created Greetr object' also. 
    EventEmitter.call(this);     
    this.greeting = "Hello World!";
}

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
