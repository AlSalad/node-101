var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("Port : 3000");
  res.writeHead(200, {'Content-Type' : 'application/pdf'});
  //reading the content file
  fs.readFile('index.pdf', (err, data) => {
    if(err){
      res.json({'status':'error',msg:err});
    }else{
      res.write(data);
      res.end();
    }
  });
}).listen(3000);
