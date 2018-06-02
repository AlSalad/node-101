const fs = require('fs');

var date1 = new Date();
var time_start = date1.getTime();
console.log('{Check point 1} starting at: ' + time_start);
console.log("Let's start reading file");

var file = 'output.txt'


fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log("Content : " + data);
})

var date2 = new Date();
var time_end = date2.getTime();
console.log('{Check point 2} finishing at: ' + time_end);
var time_executed = time_end - time_start;
console.log('time for execution : ' + time_executed);

console.log('Another task to be executed');
