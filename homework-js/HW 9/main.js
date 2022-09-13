const elTabs = document.querySelector('.tabs');
elTabs.addEventListener('click', tabsClickHandler);

function tabsClickHandler(event) {
    const elActiveTab = document.querySelector('.tabs .tabs-title.active');
    elActiveTab.classList.remove('active');

    event.target.classList.add('active');
    toSwitchContent(event.target.dataset.index);
};

function toSwitchContent(id) {
    const elContantActive = document.querySelector('.tabs-content .tab-content.active');
    elContantActive.classList.remove('active');
    
    const elContent = document.getElementById(id);

    if (elContent === null) return;
   
    elContent.classList.add('active');
};
