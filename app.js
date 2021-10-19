'use strict';
const startBtn = document.querySelector('#start');
const container = document.querySelector('#container');
const target = document.getElementById('target');
const display = document.getElementById('display');

let running = false;
let width = container.clientWidth;
let height = container.clientHeight;
let lastClick = Date.now()

startBtn.addEventListener('click', function() {
    if(running) running = false;
    else running = true;
    console.log(running);
});

target.addEventListener('click', function() {
    target.style.top = Math.random() * (width - target.clientHeight) + 'px';
    target.style.left = Math.random() * (height - target.clientWidth) + 'px';
    display.innerHTML = Date.now() - lastClick + "ms";
    lastClick = Date.now();
});