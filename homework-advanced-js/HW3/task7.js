const array = ["value", () => "showValue"];

// Допишите ваш код здесь
const [value, showValue] = array;

alert(value); // должно быть выведено 'value'
alert(showValue()); // должно быть выведено 'showValue'
