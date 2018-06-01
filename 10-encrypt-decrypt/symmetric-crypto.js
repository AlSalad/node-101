var crypto = require('crypto');
//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
algorithm = 'aes-256-ctr';
password = 'superhardpassword';

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm,password);
  var crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

var text = "This text is not that creative."

var e = encrypt(text);
console.log(e);

var d = decrypt(e);
console.log(d);
