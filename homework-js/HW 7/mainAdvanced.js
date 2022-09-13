function showListOnPage(array, element) {
    element.insertAdjacentHTML('beforeend', createHTMLString(array));
};

function createHTMLString(array) {
    let newArray = array.map((item) => {
        return (typeof item === 'object' && Array.isArray(item)) ? createHTMLString(item) : `<li>${item}</li>`;
    });

    return `<ul>${newArray.join('')}</ul>`;
}

function setTimer() {
    const intervalId = setInterval(timer, 1000);

    let i = 3;
    const elementH1 = document.createElement('h1');
    function timer() {
        elementH1.innerText = i;
        elementBody.append(elementH1);
        i--;

        if (i < 0) {
            clearInterval(intervalId);
            elementBody.innerHTML = '';
        };
    };
};

const arrayToShow = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];
const elementBody = document.querySelector('body');

showListOnPage(arrayToShow, elementBody);

setTimer();

