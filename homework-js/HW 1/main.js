let userName;
let userAge;
let message;

do {
    userName = prompt('Enter your name', userName);
    userAge = +prompt('Enetr your age', userAge);
} while (userName.length === 0 || isNaN(userAge));

if (userAge < 18) {
    message = 'You are not allowed to visit this website';
} else if (userAge >= 18 && userAge <= 22) {
    message = confirm('Are you sure you want to continue?') ? 'Welcome ' + userName : 'You are not allowed to visit this website';
} else {
    message = 'Welcome ' + userName;
}

alert(message);