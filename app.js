'use strict';
const startBtn = document.querySelector('#start');
const container = document.querySelector('#container');
const target = document.querySelector('#target');
let running = false;
let width = container.clientWidth;
let height = container.clientHeight;

startBtn.addEventListener('click', function() {
    if(running) running = false;
    else running = true;
});

target.addEventListener('click', function() {
    const target = document.getElementById("target");
    target.style.top = Math.random() * (width - target.clientHeight) + 'px';
    target.style.left = Math.random() * (height - target.clientWidth) + 'px';
});