'use strict';

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createEventHandler(selector, type, eventHandler) {
    let domObj;
    domObj = document.querySelector(selector);
    domObj.addEventListener(type, eventHandler);
}
