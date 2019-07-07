let a = Number(prompt(`Enter the a: `));
let b = Number(prompt(`Enter the b: `));
let c = Number(prompt(`Enter the c: `));
if (a + b > c && a + c > b && b + c > a && a>0 && b>0 && c>0){
    console.log(`triangle exist`);
    if (a===b && b===c && c===a) {
        console.log(`Eequivalent triangle`);
    } else if (a===b ^ b===c ^ c===a) {
        console.log(`Isosceles triangle`);
    } else {
        console.log(`Normal triangle`);
    }
} else {
    console.log(`triangle can't exist`);
}