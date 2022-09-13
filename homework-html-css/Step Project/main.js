const elServicesTabMenu = document.querySelector('.services-tab-menu');
const elBtnLoadMoreWorkGallery = document.getElementById('btn-work-gallery-load-more');
const elWorkTabMenu = document.querySelector('.work-tab-menu');

elServicesTabMenu.addEventListener('click', (event) => {
    const elActiveBtnServices = document.querySelector('.btn-services.active');
    elActiveBtnServices.classList.remove('active');

    event.target.classList.add('active');

    const elServicesContentActive = document.querySelector('.services-content.active');
    elServicesContentActive.classList.remove('active');

    const dataIndex = event.target.dataset.index;
    const currentElementContent = document.querySelector(`[data-index-content="${dataIndex}"]`);
    currentElementContent.classList.add('active');
});


const getResponse = () => {
    arrResponse = [
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design1.jpg',
            dataFilter: 'gragicDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design2.jpg',
            dataFilter: 'gragicDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design3.jpg',
            dataFilter: 'gragicDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design4.jpg',
            dataFilter: 'webDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design5.jpg',
            dataFilter: 'webDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design6.jpg',
            dataFilter: 'webDesign',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design7.jpg',
            dataFilter: 'landingPages',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design8.jpg',
            dataFilter: 'landingPages',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design9.jpg',
            dataFilter: 'landingPages',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design10.jpg',
            dataFilter: 'wordpress',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design11.jpg',
            dataFilter: 'wordpress',
        },
        {
            img: './img/Step_Project_Ham/graphic_design/graphic-design12.jpg',
            dataFilter: 'wordpress',
        },
    ];

    return arrResponse;
};

elBtnLoadMoreWorkGallery.addEventListener('click', () => {
    elBtnLoadMoreWorkGallery.innerText = 'loading...';
    setTimeout(addContent, 2000);
});

function addContent() {
    let postList = getResponse();
    const elWorkGallery = document.querySelector('.our-work-gallery');

    postList.forEach(post => {
        const elGaleryItem = document.createElement('div');
        elGaleryItem.classList.add('our-work-gallery_item');
        elGaleryItem.classList.add('active');
        elGaleryItem.setAttribute('data-filter', post.dataFilter);
        elGaleryItem.innerHTML = `<img src="${post.img}" alt="" />
                                  <div class="our-work-gallery_preview">
                                    <div class="preview-icon"></div>
                                    <h3 class="preview-title">creative design</h3>
                                    <h4 class="preview-subtitle">Web Design</h4>
                                   </div>`;
        
        elWorkGallery.append(elGaleryItem);
    });

    elBtnLoadMoreWorkGallery.classList.add('hide');
};


elWorkTabMenu.addEventListener('click', (event) => {
    document.querySelector('.btn-work.active-filter').classList.remove('active-filter');
    event.target.classList.add('active-filter');
    const dataFilter = event.target.dataset.filter;

    if (dataFilter === 'all') {
        const workGalleryElements = document.querySelectorAll('.our-work-gallery_item');

        for (let i = 0; i < workGalleryElements.length; i++){
            workGalleryElements[i].classList.add('active');
        }

        return;
    };

    const workGalleryActiveElements = document.querySelectorAll('.our-work-gallery_item.active');

    for (let i = 0; i < workGalleryActiveElements.length; i++){
        workGalleryActiveElements[i].classList.remove('active');
    };

    const workGalleryCurrentElements = document.querySelectorAll(`.our-work-gallery_item[data-filter="${dataFilter}"]`);

    for (let i = 0; i < workGalleryCurrentElements.length; i++){
        workGalleryCurrentElements[i].classList.add('active');
    }
});

const elPeopleFotos = document.querySelector('.people-fotos');
let sliderIndex = 2;

elPeopleFotos.addEventListener('click', (event) => {
    setMainFoto(event.target);
    sliderIndex = Number(event.target.dataset.index);
});

function setMainFoto(elPeopleFoto) {
    const dataName = elPeopleFoto.dataset.name;
    const dataSurname = elPeopleFoto.dataset.surname;
    document.querySelector('.people-name').innerText = `${dataName} ${dataSurname}`;
    document.querySelector('.people-profession').innerText = elPeopleFoto.dataset.profession;

    const elMainFoto = document.querySelector('.people-main-foto');
    elMainFoto.className = `people-main-foto ${dataName}`;

    document.querySelector('.people-foto.active').classList.remove('active');
    elPeopleFoto.classList.add('active');
}

const peoplePhotoElements = document.querySelectorAll('.people-foto');
const buttonsSlider = document.querySelectorAll('.btn-slider');

for (let i = 0; i < buttonsSlider.length; i++){
    buttonsSlider[i].addEventListener('click', btnSliderClickHandler);
}

function btnSliderClickHandler(event) {
    const dataDirection = event.target.dataset.direction;

    if (dataDirection === undefined) return;

    dataDirection === 'left' ? sliderIndex-- : sliderIndex++;

    if (sliderIndex < 0) {
        sliderIndex = peoplePhotoElements.length - 1;
    } else if (sliderIndex > (peoplePhotoElements.length - 1)) {
        sliderIndex = 0;
    };

    const elPeopleFoto = document.querySelector(`.people-foto[data-index="${sliderIndex}"]`);
    setMainFoto(elPeopleFoto);
}