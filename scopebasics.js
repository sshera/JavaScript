let a = 'first';

function scopeTest() {
    console.log(a);
    a = 'changed';
    let b = 'second';
    if (a !='') {
        console.log(a);
        console.log('inside if: ' + b);
        c = 'third';
       // let c = 'third';
        // c = 'third';
    }
    // let b = 'second';
    console.log(c);
}

// console.log(c);
scopeTest();
// console.log(b);
// console.log(c);
console.log(a);