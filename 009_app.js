var Emitter = require("events"); //requiring noddes internal events.js for event emitter

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Somewhere, someone said hello');
});


emtr.on('greet',function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');