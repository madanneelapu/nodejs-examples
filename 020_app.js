//Buffers
//Node had made Buffer globally available.

//creating a new buffer of string with utf8 character set. If not mentioned, utf8 is default.
var buf = new Buffer('Hello','utf8'); 

console.log(buf); //prints hexa-representation
console.log(buf.toString()); //convert a buffer back to string, using the character set.
console.log(buf.toJSON()); // convert to JSON

console. log(buf[2]); //prints the code-point of the character

//allows to write to buffer. As buffer is a finite piece memory, 'wo' overrides 'he' in 'hello'
buf.write("wo"); 
console.log(buf.toString());