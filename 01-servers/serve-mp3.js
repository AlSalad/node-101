var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("Port : 3000");
  res.writeHead(200, {'Content-Type' : 'audio/mp3'});
  //reading the content file
  fs.exists('audio.mp3', function(exists) {
    if(exists){
      var rstream = fs.createReadStream('audio.mp3');
      rstream.pipe(res);
    }else{res.end("Error 404");}
  });
}).listen(3000);
