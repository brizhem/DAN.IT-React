window.addEventListener('keyup', (event) => {
    const activeBtn = document.querySelector('.btn.active');
    
    if (activeBtn !== null) activeBtn.classList.remove('active');

    const currentButton = document.querySelector(`[data-index="${event.code}"]`);
    
    if(currentButton !== null) currentButton.classList.add('active');
});
