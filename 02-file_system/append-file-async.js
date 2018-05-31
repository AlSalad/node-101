var fs = require('fs');

var content = "\nthis text will be appended";

fs.appendFile('content.txt', content, (err) => {
  if(err)
    throw err;
  console.log('New content added');
});
