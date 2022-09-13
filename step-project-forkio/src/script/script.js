const burger = document.getElementById('burger');
const header = document.querySelector('.header-menu');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('change');
    header.classList.toggle('active');
});