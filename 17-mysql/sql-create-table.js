const mysql = require('mysql');

var con = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'my_db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
