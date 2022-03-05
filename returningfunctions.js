/* DON'T DO THIS!!!
var myVariable = 'I am at the global scope';

var myFunction = function () {
    console.log('me too!');
} */

function one() {
    return 'one';
}

// let value = one();
// console.log(value);
// console.log(one());

// let value = one;
// console.log(typeof value);

// console.log(value());

// let value2 = one;
// console.log(typeof value2);
// console.log(typeof one);

// DATA TYPES: string, number, boolean, undefined, function

/* function two() {
    return function() {
        console.log('two');
    }
}

let myFunction = two();
myFunction(); */

function three() {
    return function() {
        return 'three';
    }
}

console.log(three()());