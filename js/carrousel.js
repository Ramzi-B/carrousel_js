'use strict';

const KEY_BACKSPACE = 32;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

let state;
let slides = [
    {
        image: './img/background1.jpg',
        legend: 'background1',
        number: '1'
    },
    {
        image: './img/background2.jpg',
        legend: 'background2',
        number: '2'
    },
    {
        image: './img/background3.jpg',
        legend: 'background3',
        number: '3'
    },
    {
        image: './img/background4.jpg',
        legend: 'background4',
        number: '4'
    },
    {
        image: './img/background5.jpg',
        legend: 'background5',
        number: '5'
    },
    {
        image: './img/background6.jpg',
        legend: 'background6',
        number: '6'
    },
    {
        image: './img/background7.jpg',
        legend: 'background7',
        number: '7'
    },
    {
        image: './img/background8.jpg',
        legend: 'background8',
        number: '8'
    },
    {
        image: './img/background9.jpg',
        legend: 'background9',
        number: '9'
    }
];

function updateSlider() {
    let sliderNumber, sliderImage, sliderLegend;

    sliderNumber = document.querySelector('#slider span');
    sliderImage = document.querySelector('#slider img');
    sliderLegend = document.querySelector('#slider figcaption');

    sliderNumber.textContent = slides[state.index].number;
    sliderImage.src = slides[state.index].image;
    sliderLegend.textContent = slides[state.index].legend;
}

function toggleToolBox() {
    let icon = document.querySelector('#toolbox-toggle svg');
    icon.classList.toggle('fa-arrow-right');
    icon.classList.toggle('fa-arrow-down');

    document.querySelector('.toolbox div').classList.toggle('openbox');
}

function sliderPlay() {
    let icon = document.querySelector('#slider-play svg');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');

    if (state.timer == null) {
        state.timer = window.setInterval(sliderNext, 2000);
        this.title = 'Carrousel pause';
    } else {
        window.clearInterval(state.timer);
        state.timer = null;
        this.title = 'Carrousel start';
    }
}

function sliderNext() {
    state.index++;

    if (state.index === slides.length) {
        state.index = 0;
    }

    updateSlider();
}

function initSlider() {
    state = {};
    state.index = 0;
    state.timer = null;

    createEventHandler('#slider-next', 'click', sliderNext);
    // createEventHandler('#slider-previous', 'click', sliderPrevious);
    createEventHandler('#slider-play', 'click', sliderPlay);
    createEventHandler('#toolbox-toggle', 'click', toggleToolBox);
    // createEventHandler('#slider-random', 'click', sliderRandom);
    // createEventHandler('#slider-stop', 'click', sliderStop);
    // createEventHandler('html', 'keyup', sliderKeyUp);

    updateSlider();
}
