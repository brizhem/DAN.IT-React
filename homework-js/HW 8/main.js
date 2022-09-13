
const elInputPrice = document.getElementById('price-input');
const elError = document.querySelector('.error');
let counter = 1;

elInputPrice.addEventListener('focus', inputFocusHandler);
elInputPrice.addEventListener('blur', inputBlurHandler);

function inputFocusHandler(event) {
    elInputPrice.classList.remove('font-size-colored');
    event.target.classList.add('green-border');
};

function inputBlurHandler() {
    if (elInputPrice.value < 0) {
        elInputPrice.classList.remove('green-border');
        elInputPrice.classList.add('red-border');
        elError.classList.add('error-active');

        return;
    };

    elInputPrice.classList.remove('red-border');
    elInputPrice.classList.add('green-border');
    elInputPrice.classList.add('font-size-colored');
    elError.classList.remove('error-active');

    createElementShowPrice();
};

function createElementShowPrice() {
    document.body.insertAdjacentHTML('afterbegin', ` <div class="show-price counter${counter}">
                                                        <span class="text-price">Текущая цена: ${elInputPrice.value}</span>
                                                        <button class="btn-close" data-index="${counter}">X</button>
                                                    </div>`);
    
    const elBtnClose = document.querySelector(`.btn-close[data-index="${counter}"]`);

    elBtnClose.addEventListener('click', () => {
        const elDivShowPrice = document.querySelector(`.show-price.counter${elBtnClose.dataset.index}`);
        elDivShowPrice.remove();
        elInputPrice.value = '';
    });

    counter++;
};