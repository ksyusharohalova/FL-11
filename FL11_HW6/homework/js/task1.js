let a1 = Number(prompt('Enter the A(X): '));
let a2 = Number(prompt('Enter the A(Y): '));
let b1 = Number(prompt('Enter the B(X): '));
let b2 = Number(prompt('Enter the B(Y): '));
let c1 = Number(prompt('Enter the C(X): '));
let c2 = Number(prompt('Enter the C(Y): '));
let constanta =2;
let x=(a1+b1)/ constanta;
console.log(x);
let y=(a2+b2)/ constanta;
console.log(y);
let cond = x===c1;
console.log(cond);
let cond2 = y===c2;
console.log(cond2);
if (cond) {
    if (cond2) {
        console.log('C point divides the segment by half', cond2);
    } else {
        console.log('C is not placed in center of AB section', cond2);
    }
} else {
    console.log('C is not placed in center of AB section', cond);
}