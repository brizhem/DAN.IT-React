const elPasswordForm = document.querySelector('.password-form');
const elBtn = document.querySelector('.btn');

elPasswordForm.addEventListener('click', (event) => {
    const className = event.target.dataset.toggle;

    if (!className) return;

    const elIconsList = document.querySelectorAll(`.icon-${className}`);
    
    for (let i = 0; i < elIconsList.length; i++) {
        elIconsList[i].classList.toggle('hidden');
    };

    const elInput = document.querySelector(`.${className}`);

    if (!elInput) return;

    elInput.type = elInput.type === "password" ? "text" : "password";
});

elBtn.addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
    event.preventDefault();
    
    const elInputPassword = document.querySelector('.input-password');
    const elRepeatPassword = document.querySelector('.repeat-password');
    const elErrorText = document.querySelector('.error-text');

    if (elInputPassword.value.length > 0 && elRepeatPassword.value.length > 0
            && elInputPassword.value === elRepeatPassword.value) {
        elErrorText.classList.remove('active');
        alert('You are welcome');
    } else {
        elErrorText.classList.add('active');
    };
};