
//Including the required packages
var mongo = require('mongodb');
//Establishing the connection
var new_db = "mongodb://localhost:27017"

//establishing the connection
mongo.connect(new_db ,(error , client) => {
  if(error) throw error;

  var db = client.db(testdb);

	console.log("Database demo_db created successfully");
	//To close the connection
	client.close();
});
