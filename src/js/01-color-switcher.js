function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let startBtn = document.querySelector("[data-start]");
let stopBtn = document.querySelector("[data-stop]");

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick(event) {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
}

function onStopClick(event) {
    clearInterval(timerId);
    startBtn.disabled = false;
}