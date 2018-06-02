const zlib = require('zlib');
const fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('newfile.txt');
var write = fs.createWriteStream('newfile.txt.gz');

//Transform stream which is zipping the input file
read.pipe(zip).pipe(write);
console.log("Zipped Successfully");

/**

    createDeflate()
    createInflate()
    createDeflateRaw()
    createInflateRaw()
    deflateSync()
    inflateSync()
    deflateRaw()
    inflateRaw()
    deflateRawSync()
    inflateRawSync()
    gzip()
    unzip()
    gzipSync()
    unzipSync()
    createGzip()
    createGunzip()

**/
