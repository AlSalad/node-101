const qs = require('querystring');

var value_json = qs.stringify({ id:0, name: ['luka', 'k'], age: '21'});
console.log(value_json);

var value_json2 = qs.stringify({ id:0, name: ['luka', 'k'], age: '21'}, ';');
console.log(value_json2);

var value_json3 = qs.stringify({ id:0, name: ['luka', 'k'], age: '21'}, ';', ':');
console.log(value_json3);
