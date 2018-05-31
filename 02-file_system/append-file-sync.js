var fs = require('fs');

var content = "\nthis text will be appended";
fs.appendFileSync('content.txt', content);
console.log("File Appended Successfully");
