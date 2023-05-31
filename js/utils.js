'use strict';

function createEventHandler(selector, type, eventHandler) {
    let domObj;
    domObj = document.querySelector(selector);
    domObj.addEventListener(type, eventHandler);
}
