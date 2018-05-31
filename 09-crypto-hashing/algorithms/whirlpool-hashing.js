
/*Whirlpool hashing algorithm : This hashing algorithm takes input of any length
less than 2256 bits and outputs a 512-bit hash. */
var crypto = require('crypto');
var hash = crypto.createHash('whirlpool');

data = hash.update('node101test', 'utf8');
gen_hash = data.digest('hex');
console.log(gen_hash);
