const stringDecoder = require('string_decoder').StringDecoder;
var sd = new stringDecoder('utf8');
var buff = Buffer.from('data to be buffered');

console.log(buff);

console.log(sd.write(buff));
