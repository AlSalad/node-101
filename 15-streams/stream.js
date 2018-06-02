const fs = require('fs');
const wdata = "I am working with streams";

var myWriteStream = fs.createWriteStream('aboutMe.txt');

myWriteStream.write(wdata);
myWriteStream.end();

myWriteStream.on('error', function(err){
  console.log(err);
});

myWriteStream.on('finish', function(){
  console.log("data written successfully using streams.");
	console.log("Now trying to read the same file using read streams ");
  var myReadStream = fs.createReadStream('aboutMe.txt');
  var rContents = '';
  myReadStream.on('data', function(chunk) {
    rContents += chunk;
  });
  myReadStream.on('error', function(err){
    console.log(err);
  });
  myReadStream.on('end', function(){
    console.log('read: ', rContents);
  });
  console.log('performed write and read using streams');
})
