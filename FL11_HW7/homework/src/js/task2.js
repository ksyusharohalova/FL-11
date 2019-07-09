let randomNumber1, userNumber, randomNumber2;
let totalPrice = 0;
let game=confirm(`Do you want to play a game?`);
if (game) {
    const max = 8;
    const min = 0;
    const one = 1;
    const two = 2;
    const four = 4;
    const hund = 100;
    let attempts = 3;
    let possiblePrice = 100;
    randomNumber1 = Math.floor(Math.random() * (max - min + one)) + min;
    console.log(randomNumber1);
    userNumber = Number(prompt(`Choose a roulette pocket number from ` + min + ` to ` + max +
        `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice + `$ \n Possible prize on current attempt: `
        + possiblePrice + `$`));
    if (userNumber !== randomNumber1) {
        while (attempts !== one && userNumber !== randomNumber1) {
            attempts = attempts - one;
            possiblePrice = possiblePrice / two;
            console.log(attempts);
            userNumber = Number(prompt(`Choose a roulette pocket number from ` + min + ` to ` + max +
                `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice +
                `$ \n Possible prize on current attempt: ` + possiblePrice + `$`));
        }
        if (userNumber !== randomNumber1) {
            alert(`Thank you for your participation. Your prize is: ` + totalPrice + ` $`);
        } else {
            totalPrice = totalPrice + possiblePrice;
            alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
        }
    } else {
        totalPrice = totalPrice + possiblePrice;
        alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
    }
    while (confirm(`Do you want to continue a game?`)){
        const max2 = max + four;
        let attempts = 3;
        let possiblePrice2 = possiblePrice + hund;
        randomNumber2 = Math.floor(Math.random() * (max2 - min + one)) + min;
        console.log(randomNumber2);
        userNumber = Number(prompt(`Choose a roulette pocket number from ` + min + ` to ` + max2 +
            `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice + `$ \n Possible prize on current attempt: `
            + possiblePrice2 + `$`));
        if (userNumber !== randomNumber2) {
            while (attempts !== one && userNumber !== randomNumber2) {
                attempts = attempts - one;
                possiblePrice2 = possiblePrice2 / two;
                console.log(attempts);
                userNumber = Number(prompt(`Choose a roulette pocket number from ` + min + ` to ` + max2 +
                    `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice +
                    `$ \n Possible prize on current attempt: ` + possiblePrice2 + `$`));
            }
            if (userNumber !== randomNumber2) {
                alert(`Thank you for your participation. Your prize is: ` + totalPrice + ` $`);
            } else {
                totalPrice = totalPrice + possiblePrice2;
                alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
            }
        } else {
            totalPrice = totalPrice + possiblePrice2;
            alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
        }
    }
    alert(`Thank you for your participation. Your prize is: ` + totalPrice + ` $`);
    totalPrice = 0;
} else {
    alert(`'You did not become a billionaire, but can.`);
}