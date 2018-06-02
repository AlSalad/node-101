const zlib = require('zlib');
const fs = require('fs');

var unzip = zlib.createUnzip();

var read = fs.createReadStream('newfile.txt.gz');
var write = fs.createWriteStream('unzipped.txt');

read.pipe(unzip).pipe(write);
console.log("unzipped successfully");
