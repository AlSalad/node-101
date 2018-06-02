//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

var buff = Buffer.from('node101');
var newBuff = Buffer.alloc(20);
console.log(newBuff);
console.log(newBuff.toString());
buff.copy(newBuff);
console.log(newBuff);
console.log(newBuff.toString());
