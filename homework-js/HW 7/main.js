function showListOnPage(array, element) {
    let newArray = array.map((item) => {
        return `<li>${item}</li>`;
    });

    element.insertAdjacentHTML('beforeend', `<ul>${newArray.join('')}</ul>`);
};

// const arrayToShow = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
const arrayToShow = ["1", "2", "3", "sea", "user", 23];
showListOnPage(arrayToShow, document.querySelector('body'));