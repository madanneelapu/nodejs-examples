//Callbacks in JavaScript

function greet(callback){
    console.log("hello");
    callback();
}

greet(function(){
    console.log("Callback invoked");
});

greet(function(){
    console.log("Again, Callback invoked");
});

//The main function can pass in some data to our callback function.
//we can get handle of that data.
function greet2(callback){
    console.log("hello");
    var data = {
        "name":"John Doe"
    };
    callback(data);
}

greet2(function(data){
    console.log("Callback invoked");
    console.log(data);
});

greet2(function(data){
    console.log("Again, Callback invoked");
    console.log(data.name);
});