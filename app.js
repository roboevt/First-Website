'use strict';
const startBtn = document.querySelector('#start');
const container = document.querySelector('#container');
const target = document.querySelector('#target');
let running = false;

startBtn.addEventListener('click', function() {
    if(running) running = false;
    else running = true;
});

target.addEventListener('click', function() {
    const target = document.getElementById("target");
    target.style.top = Math.random() * (container.clientHeight - target.clientHeight) + 'px';
    target.style.left = Math.random() * (container.clientWidth - target.clientWidth) + 'px';
});