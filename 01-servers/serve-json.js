var http = require("http");
var fs = require('fs');

console.log('Server will listen at :  127.0.0.1:3000 ');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let json_respone = {
      status : 200 ,
      message : 'success' ,
      result : [ 'sunday', 'monday', 'tuesday', 'wednesday'] ,
      code : 2000
    }
    console.log('Server Running');
    res.end(JSON.stringify(json_respone));
}).listen(3000);
