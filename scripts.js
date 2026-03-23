console.log("hello world");

let timerLabel = document.getElementById("timerLabel");
let alarmSound = document.getElementById("alarmsound");
alarmSound.loop = true;
let seconds = 3;



const Clock = setInterval(tick, 1000);
timerLabel.textContent = seconds;

function decrementTimer() {

  seconds--;
  timerLabel.textContent = seconds;
}

function stopTimer() {
  if (seconds == 0) {
    clearInterval(Clock);
    timerLabel.textContent = "Timer is up!";
    alarmSound.play();
  }
}



function tick() {
  decrementTimer();
  stopTimer();
}
