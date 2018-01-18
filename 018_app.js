//inheriting from the node event emitter - Part 3
//ES6 Classses - They are just syntactical sugar
'use strict';

var EventEmitter = require('events');

class Greetr extends EventEmitter{ //instead of util.inherits, we use extends keyword
    constructor(){
        super(); //instead of EventEmitter.call(this), we use 'super' to call parent function constructor.
        this.greeting = "Hello World!";
    }
    
    greet(data){
        console.log(this.greeting+': '+data);
        this.emit('greet',data);
    }
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log("someone greeted! : "+data)
});

greeter1.greet('Madan');
