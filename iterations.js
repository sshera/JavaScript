/* for (i = 0; i < 10; i++) {
    console.log(i);
} */
// i = 0 initializes value
// i < 10 says continue running loop as long as i < 10 condition is met
// i++ tells you what operation to perform on i after each iteration

// let a = [4, 8, 15, 16, 23, 42];
/* for (i = 0; i < a.length; i++) {
    console.log(a[i]);
} */

/* for (let b = 0; b < a.length; b++) {
    const c = a[b];
    console.log(c);
} */

let x = 1;
while (x < 10) {
    console.log(x++);
    if (x == 7) break;
    /*if (x == 7) {
        break;
    } */
}