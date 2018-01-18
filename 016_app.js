//another simple example to understand the same concept as in
//inheriting from the node event emitter - Part 2


var util = require("util");

function Person(){
    this.firstname="John";
    this.lastname="Doe";
}

Person.prototype.greet = function(){
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
}


function Policeman(){
    //It is just like calling the super constructor in other programming languages
    Person.call(this); //runs the Person constructor function
    this.badgenumber = "123456";
}

util.inherits(Policeman, Person);

var officer1 = new Policeman();
officer1.greet();
