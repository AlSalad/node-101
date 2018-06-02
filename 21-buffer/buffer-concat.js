var buff = Buffer.from('node101 - ');
var buff2 = Buffer.from('Wow thats amazing');
var buff3 = Buffer.concat([buff,buff2]);
console.log(buff3.toString());
