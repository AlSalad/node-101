var http = require("http");

const HOST = '127.0.0.1';
const PORT = 3000;

var server  = http.createServer((request, response) => {
  //write Head: inbuilt method which is used to send the status code and the MIME type
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!");
  console.log("PORT");
  response.end();
});

server.listen(PORT, HOST, (error) => {
  if(error) {
    return console.log("Error occured : " + error);
  }

  console.log("server is listening on " + HOST + ":" + PORT);
});
