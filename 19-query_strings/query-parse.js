const querystring = require('querystring');

var value_json = querystring.parse('id=1&name=luka&age=21');
console.log(value_json);

var value_json2 = querystring.parse('id%2&name%luka&age%21', '&', '%');
console.log(value_json2)

var value_json2 = querystring.parse('id%2#name%luka#age%21', '#', '%');
console.log(value_json2)
