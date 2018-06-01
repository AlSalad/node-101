var mongo = require('mongodb');
//Establishing the connection
const URL = "mongodb://localhost:27017"
const DB	= "testdb"

mongo.connect(URL, function(err , client){
	if (err) throw err;

	var db = client.db(DB);

	var data = { name : "luka" , age : "21" , mobile : "1234567890" }

	db.collection("details").findOne({}, (err , collection) => {
		if(err) throw err;
		console.log("Record inserted successfully");
		console.log(collection);
		client.close();
	});
});
