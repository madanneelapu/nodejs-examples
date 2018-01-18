'use strict';

var EventEmitter = require('events');

//Class Expression. Just like any other first-class variable
module.exports = class Greetr extends EventEmitter{ //instead of util.inherits, we use extends keyword
    constructor(){
        super(); //instead of EventEmitter.call(this), we use 'super' to call parent function constructor.
        this.greeting = "Hello World!";
    }
    
    greet(data){
        console.log(this.greeting+': '+data);
        this.emit('greet',data);
    }
}