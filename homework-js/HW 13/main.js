const elBtnChange = document.getElementById('btn-change-theme');

localStorage.setItem('ThemeFileWay', "./CSS/other_style.css");

setDesignTheme();

function setDesignTheme() {
    const ThemeFileWay = localStorage.getItem('ThemeFileWay');
    const changeTheme = localStorage.getItem('changeTheme');

    if (!ThemeFileWay) return;

    if(changeTheme === '1') {
        document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${ThemeFileWay}">`)
    }else{
        const elLink = document.querySelector(`[href="${ThemeFileWay}"]`);

        if (!elLink) return;

        elLink.remove();
    };
};

elBtnChange.addEventListener('click', () => {
    const changeTheme = localStorage.getItem('changeTheme');

    localStorage.setItem('changeTheme', changeTheme === '0' || changeTheme === null ? '1' : '0');

    setDesignTheme();
});