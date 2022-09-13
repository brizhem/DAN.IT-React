let userNumber1;
let userNumber2;

//Сразу приводить введенное значение к числу не буде, чтобы подставлять введенное значение в качестве значения по умоляанию,
//если ввели не число. Для сравнения с "0" буду использовть неявное сравнение, чтобы было приведение типов. 
do {
    userNumber1 = prompt('input number 1', userNumber1);
    userNumber2 = prompt('input number 2', userNumber2);
} while (isNaN(Number(userNumber1)) || userNumber1 == 0 || isNaN(Number(userNumber2)) || userNumber2 == 0);

let mathOperation = prompt('input sign of math operation');

//В вычеслениях при суммировании будем явно приводить к чилу, чтобы не было конкатенации
function getResultMathOperation(number1, number2, mathOperation) {
    let result;

    switch (mathOperation) {
        case '+':
            result = Number(number1) + Number(number2);
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Your input incorrect sign of math operation';
    }
    
    return result;
}

console.log(getResultMathOperation(userNumber1, userNumber2, mathOperation));