let a = 7;
let b = '6';
b = parseInt(b, 10); // 10 means base 10, converts string to number in base 10
let c = a + b;
console.log('Answer: ' + c);
let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e);