//buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])

var buffer1 = Buffer.from('node103');
var buffer2 = Buffer.from('node102');
var output = buffer1.compare(buffer2);
console.log(output);

if(output < 0){
  console.log(buffer1 + " comes before " + buffer2);
}
else if(output == 0){
  console.log(buffer1 + " is same as " + buffer2);
}
else {
  console.log(buffer2 + " comes before " + buffer1);
}
