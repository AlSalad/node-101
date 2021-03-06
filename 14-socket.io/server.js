const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);
console.log("Server listening at : 3000");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/admin.html');
})

io.on('connection', function (socket) {

  socket.emit('welcome', { data: 'welcome' });

  socket.on('new' , function(data) {
          console.log('About to upload Quote')
          io.sockets.emit( 'next' , { data : data } )
    })
});
