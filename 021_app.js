//ES6 Typed arrays - Buffers and Views

var buffer = new ArrayBuffer(8); //8 Bytes = 8x8 = 64 bits.
var view = new Int32Array(buffer);
//because we used a 32-bit array & our buffer can hold 64-bits, we can store upto two values in view.
view[0] = 5;
view[1] = 15;
//additional values don't get added to view.
view[2] = 30;
console.log(view);