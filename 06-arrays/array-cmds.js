const arr = ['a', 'e', 'i', 'o'];
console.log(arr);

//add element at end of array
arr.push('u');
console.log("push");
console.log(arr);

//remove element from end of array
arr.pop();
console.log("pop");
console.log(arr);

//add element at beginning of array
arr.unshift("u");
console.log("unshift");
console.log(arr);

//remove element at beginngin of Array
arr.shift();
console.log("shift");
console.log(arr);

//reverse order of Array
arr.reverse();
console.log("reverse");
console.log(arr);

arr.sort();
console.log("sort");
console.log(arr);

//splice as add
//erste Zahl = index
//zweite Zahl = Reichweite vom ersetzen
arr.splice(2,0, "ok", "cool");
console.log("splice add");
console.log(arr);

//splice remove
arr.splice(2,2);
console.log("splice remove");
console.log(arr);
