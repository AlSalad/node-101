var mongo = require('mongodb');
//Establishing the connection
const URL = "mongodb://localhost:27017"
const DB	= "testdb"

mongo.connect(URL, function(err , client){
	if (err) throw err;

	var db = client.db(DB);

  var query = { name : "luka"}

	var data = { name : "peter" , age : "22" , mobile : "1234567890" }

	db.collection("details").replaceOne(query, data, (err , collection) => {
		if(err) throw err;
		console.log("Record replaced successfully");
		console.log(collection);
		client.close();
	});
});
