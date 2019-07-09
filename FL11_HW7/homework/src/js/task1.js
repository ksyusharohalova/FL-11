let email = prompt(`Please,input your email:`, ``);
const lengthEmail = 6;
const lengthNewPassword = 5;
let user = `user@gmail.com`;
let admin = `admin@gmail.com`;
let password,changePass, newPassword1, newPassword2;
let UserPass = `UserPass`;
let AdminPass = `AdminPass`;
if (email === `` || email === null) {
    alert(`Canceled`);
} else if (email.length < lengthEmail) {
  alert(`I don't know any emails having name length less than 6 symbols`);
} else if (email===user || email===admin) {
  password = prompt(`Please, input your password`,``);
} else {
    alert(`I don’t know you`);
}
if (password === `` || password === null) {
    alert(`Canceled`);
} else if (email === user && password === UserPass) {
    changePass = confirm(`Do you want to change your password?`);
    if (changePass) {
        password=prompt(`Please, input your old password:`,``);
        if (password===UserPass){
            newPassword1 =prompt(`Please, input new password:`,``);
            if (newPassword1.length < lengthNewPassword) {
                alert(`It’s too short password. Sorry.`);
            } else {
                newPassword2 =prompt(`Please, input new password once more:`,``);
                if (newPassword2 === newPassword1) {
                    alert(`You have successfully changed your password`);
                } else {
                    alert(`You wrote the wrong password`);
                }
        }
        } else {
            alert(`Wrong password`);
        }
    }
} else if (email===admin && password===AdminPass ) {
    changePass = confirm(`Do you want to change your password?`);
    if (changePass) {
        password=prompt(`Please, input your old password:`,``);
        if (password===AdminPass){
            newPassword1 =prompt(`Please, input new password:`,``);
            if (newPassword1.length < lengthNewPassword) {
                alert(`It’s too short password. Sorry.`);
            } else {
                newPassword2 =prompt(`Please, input new password once more:`,``);
                if (newPassword2 === newPassword1) {
                    alert(`You have successfully changed your password`);
                } else {
                    alert(`You wrote the wrong password`);
                }
            }
        } else {
            alert(`Wrong password`);
        }
    }
}