
//var reg = /ab*/;
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.


//var reg = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.


var fs = require('fs');
var filename = 'data.txt';
var str = fs.readFileSync(filename).toString();
/* pattern = man
    g : global scope
    i : case insensitive
    m : multiline match*/
var pattern = /man/gim
var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurences of pattern in the string is : " + len);
