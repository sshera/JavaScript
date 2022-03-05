let a = [4, 8, 15, 16, 23, 42];
let b = ['david', 'eddie', 'alex', 'michael'];
/* console.log(a[0]); // first value is 0, second is 1, etc.
console.log(a[1]);
console.log(a); */

// a[0]=7;
// console.log(a);
// console.log(typeof a); datatype is object

let c = [4, 'alex', true];
// console.log(c);

// console.log(b[4]);

// console.log(a.length); actual number, not zero based

/* a[10] = 77;
console.log(a);
console.log(a.length); */

a.push(77);
console.log(a);
console.log(a.length);

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);