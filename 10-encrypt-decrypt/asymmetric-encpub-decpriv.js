/**
Example of Asymmetric encryption
Encrypting using public key and decrypting using private kere **/
var crypto = require('crypto');
var fs = require('fs');

//Reading the Public Key
pubK = privK = fs.readFileSync('pub.key').toString();

//Passing the text to be encrypted using private key
var buf = Buffer.from('This is secret code', 'utf8');

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
console.log(secretData.toString('utf8'));

privK = {
  key: fs.readFileSync('priv.key').toString(),
  passphrase: 'nodejsera'
}

origData = crypto.privateDecrypt(privK, secretData);
console.log(origData.toString());
