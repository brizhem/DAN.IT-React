let counter = 0;
const elBtnStop = document.getElementById('btn-stop');
const elBtnPlay = document.getElementById('btn-play');
const elSeconds = document.getElementById('seconds');
const elMilliseconds = document.getElementById('milliseconds');
let intervalId;

showPicture();

intervalId = setInterval(showPicture, 3000);

function showPicture() {
    const elImgList = document.getElementsByClassName('image-to-show');

    if (!elImgList.length) return;

    if (counter > elImgList.length - 1) counter = 0;

    const elActiveImg = document.querySelector('.image-to-show.active');

    if (elActiveImg) elActiveImg.classList.remove('active');

    elImgList[counter].classList.add('active');

    counter++;
};

elBtnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

elBtnPlay.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(showPicture, 3000);
    };
});