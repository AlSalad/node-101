// MD5 stands for message digest 5 is a widely used hash function
//which produces 128-bit hashes. 
var crypto = require('crypto');
var hash = crypto.createHash('md5');
//passing the data to be hashed
data = hash.update('node101test', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);
