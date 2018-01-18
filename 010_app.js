//Using 'Magic Words' pattern to overcome typo errors
//make all eventnames configurable at one place.

var Emitter = require("events"); //requiring noddes internal events.js for event emitter
var eventConfig = require("./010_config.js").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET,function(){
    console.log('Somewhere, someone said hello');
});


emtr.on(eventConfig.GREET,function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);