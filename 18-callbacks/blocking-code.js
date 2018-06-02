const fs = require('fs');

var date1 = new Date();
var time_start = date1.getTime();
console.log('starting at: ' + time_start);
console.log("Let's start reading file");

var file = 'output.txt'
var content = fs.readFileSync(file);
console.log('Content : ' + content);

var date2 = new Date();
var time_end = date2.getTime();
console.log('ending at: ' + time_end);
var time_executed = time_end - time_start;
console.log('time for execution : ' + time_executed);

console.log('Another task to be executed');
