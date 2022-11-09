
import flnpmatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert("Please choose a date in the future");
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
};


const calendar = flnpmatpickr('#datetime-picker', options);


const timer = {
  start() {
    const startTime = calendar.selectedDates[0];

    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = convertMs(deltaTime);
      
      if (deltaTime <= 0) {
        clearInterval(intervalId);
      } else {
        timerUpdate(time);
      }

      console.log(deltaTime);
    }, 1000);
  }
}

function timerUpdate(object) {

  dataDays.innerHTML = addLeadingZero(object.days);
  dataHours.innerHTML = addLeadingZero(object.hours);
  dataMinutes.innerHTML = addLeadingZero(object.minutes);
  dataSeconds.innerHTML = addLeadingZero(object.seconds);
}

let getEl = selector => document.querySelector(selector);

let timerInput = getEl("#datetime-picker");
let buttonStart = getEl("[data-start]");
let dataDays = getEl("[data-days]");
let dataHours = getEl("[data-hours]");
let dataMinutes = getEl("[data-minutes]");
let dataSeconds = getEl("[data-seconds]");


buttonStart.addEventListener('click', onClickTimer);

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

function onClickTimer() {
  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}