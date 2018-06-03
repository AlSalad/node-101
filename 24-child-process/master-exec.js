const cp = require('child_process');

for (var i = 0; i < 6; i++) {
  var workerProcess = cp.exec('node slave.js ' + i, function(err, stdout, stderr){
    if (err) {
      console.log(err.stack);
      console.log('Error Code :' + err.code);
      console.log('Error Signal : ' + err.signal);
    }

    if(stderr){
      console.log('value of stdderr' + stderr);
    }

    console.log('value of stdout' + stdout);
  });

  workerProcess.on('exit', function (code){
    console.log('child process exited');
  })
}
