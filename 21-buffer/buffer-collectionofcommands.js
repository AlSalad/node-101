var buff = Buffer.from('node101');
console.log("Index of 0 : " + buff.indexOf('0'));
console.log("Length of buffer : " + buff.length);
var buffSliced = buff.slice(0,3);
console.log("content sliced : " + buffSliced.toString());

var json = buff.toJSON(buff);
console.log(json);

console.log(buff.toString('ascii'));
