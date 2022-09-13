let userNumber;
let isNoNumber = true;

do {
    userNumber = +prompt('Enter integer number', 0);
} while (!Number.isInteger(userNumber));

for (let i = 0; i < userNumber; i++){
    if (i % 5 === 0) {
        isNoNumber = false;
        console.log(i);
    }
}

if (isNoNumber) {
    console.warn('Sorry, no numbers');
}

//Вывод простых чисел
let startNumber;
let finishNumber;

do {
    startNumber = +prompt('Enter first integer number', 0);
    finishNumber = +prompt('Enter second integer number', 0);
} while (!Number.isInteger(startNumber) || !Number.isInteger(finishNumber));

//Если начальное число диапазона меньше 2, то это не простое чило и значения чисел до 2 выводить в консоль не нужно. 
//Поэтому цикл начну со счетчика равного 2, чтобы не прописывать дополнительное условие в цикле,
//а конечное значение диапазона будет максимальное введенное число.
for (let i = 2; i <= Math.max(startNumber, finishNumber); i++){
    let isPrimeNumber = true;
    
    for (let j = 2; j < i; j++){
        if (i % j === 0) {
            isPrimeNumber = false;
        }
    }

    if (isPrimeNumber) {
        console.log(i);
    }
}