'use strict';

function toggleToolBox() {
    let icon = document.querySelector('#toolbox-toggle svg');
    icon.classList.toggle('fa-arrow-right');
    icon.classList.toggle('fa-arrow-down');

    document.querySelector('.toolbox div').classList.toggle('openbox');
}

function initSlider() {

    // createEventHandler('#slider-next', 'click', sliderNext);
    // createEventHandler('#slider-previous', 'click', sliderPrevious);
    // createEventHandler('#slider-play', 'click', sliderPlay);
    createEventHandler('#toolbox-toggle', 'click', toggleToolBox);
    // createEventHandler('#slider-random', 'click', sliderRandom);
    // createEventHandler('#slider-stop', 'click', sliderStop);
    // createEventHandler('html', 'keyup', sliderKeyUp);

}