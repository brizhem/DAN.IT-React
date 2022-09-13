let userNumber;

do {
    userNumber = prompt('Input number', userNumber);
} while (isNaN(Number(userNumber)) || userNumber == 0);

function getFactorial(x) {
    return x === 1 ? 1 : x * getFactorial((x - 1));
}

alert(getFactorial(Number(userNumber)));