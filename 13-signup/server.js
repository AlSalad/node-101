const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongo = require('mongodb');
const bodyParser = require('body-parser');

var app = express();
//Establishing the connection
const DB_URL = "mongodb://localhost:27017/";
const DB = "userdb";

app.get('/', function(req, res) {
  res.set({
    'Access-Control-Allow-Origin' : '*'
  });
  return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var getHash = (pass, phone) => {
  var hmac = crypto.createHmac('sha512', phone);
  data = hmac.update(pass);
  gen_hmac = data.digest('hex');
  console.log("hmac: " + gen_hmac);
  return gen_hmac;
}

app.post('/sign_up', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  var phone = req.body.phone;
  var password = getHash(pass, phone);

  var data = {
    "name":name,
		"email":email,
		"password": password,
		"phone" : phone
  }

  mongo.connect(DB_URL, function(err, client){
    if(err) throw err;
    var db = client.db(DB);

    db.collection("users").insertOne(data, (err, collection) => {
      if(err) throw err;
      console.log("Record inserted successfully");
			console.log(collection);
    });
  });

  console.log("DATA is " + JSON.stringify(data) );
  res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/success.html');  
});
