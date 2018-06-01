var mongo = require('mongodb');
//Establishing the connection
const URL = "mongodb://localhost:27017"
const DB	= "testdb"

mongo.connect(URL, function(err , client){
	if (err) throw err;

	var db = client.db(DB);

	db.collection("details").find({}).toArray((err , collection) => {
		if(err) throw err;
		console.log("Record inserted successfully");
		console.log(collection);
		client.close();
	});
});
