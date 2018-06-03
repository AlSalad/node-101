//child_process.spawn(command[, args][, options])
const cp = require('child_process');

for (var i = 0; i < 6; i++) {
  var worker = cp.spawn('node', ['slave.js', i]);

  worker.stdout.on('data', function (data){
    console.log('Value of stout : ' + data);
  });

  worker.stderr.on('data', function (data){
    console.log('Value of sterr : ' + data);
  });

  worker.on('close', function (code){
    console.log('child process exited with code ')
  })
}
