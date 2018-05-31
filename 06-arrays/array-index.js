arr = ['tomatoes','pineapple'];
arr2 = ['mango','peach','apple'];
console.log('concat');
console.log(arr);
console.log(arr2);
var new_arr = arr.concat(arr2);
console.log(new_arr);


new_arr.push('peach');
console.log(new_arr);

//indexOf
var pos = new_arr.indexOf("peach");
console.log("index of peach is : " + pos);

//lastIndexOf
var lastPos = new_arr.lastIndexOf("peach");
console.log("last index of peach is : " + lastPos);
