//Call and Apply Methods
var obj = {
    name:"John Doe",
    "greet":function(){
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet();
//calls a method of the object, substituting another object for the current object.
obj.greet.call({name:"Jane Doe"}); 
obj.greet.apply({name:"Madan Neelapu"});

// the difference between call and apply is the way in which parameters for the 
//'to be invoked function' are passed. When using 'call' we pass parameters as coma delimited.
//when using apply we pass parameters as an array.

var obj2 = {
    name:"John Doe",
    "greet":function(greetText){
        console.log(`Hello, ${this.name}! ${greetText}`);
    }
};

obj2.greet("Good Morning");
obj2.greet.call({name:"Jane Doe"}, "Good Morning"); //good for less params
obj2.greet.apply({name:"Madan Neelapu"}, ["Good Morning"]); // good for more params