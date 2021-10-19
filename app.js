'use strict';
const startBtn = document.querySelector('#start');
const container = document.querySelector('#container');
const target = document.getElementById('target');
const display = document.getElementById('display');

let running = false;
let width = container.clientWidth;
let height = container.clientHeight;
let lastClick = Date.now();
let firstClick = Date.now();
let totalClicks = 0;

startBtn.addEventListener('click', function() {
    if(running) running = false;
    else running = true;
    console.log("Running: " + running);
    if(running) {
        display.innerHTML = " ";
        target.style.top = Math.random() * (width - target.clientHeight) + 'px';
        target.style.left = Math.random() * (height - target.clientWidth) + 'px';
        firstClick = Date.now();
        totalClicks = 0;
        startBtn.innerHTML = "Stop";
    } else {
        startBtn.innerHTML = "Start";
        target.style.top = 0 + "px";
        target.style.left = 0 + "px";
    }
});

target.addEventListener('click', function() {
    if(running) {
        target.style.top = Math.random() * (width - target.clientHeight) + 'px';
        target.style.left = Math.random() * (height - target.clientWidth) + 'px';
        display.innerHTML = "Last time: " + (Date.now() - lastClick) + "ms";
        display.innerHTML += "<br /> Average Time: " + Math.round((Date.now() - firstClick) / totalClicks); + "ms";
        lastClick = Date.now();
        totalClicks++;
    }
});