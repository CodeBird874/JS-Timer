
let timerLabel = document.getElementById("timerLabel");
let alarmSound = document.getElementById("alarmsound");
alarmSound.loop = true;
let seconds = 3;
let minutes = 1;


formatTimer();
const Clock = setInterval(tick, 1000);






function formatTimer() {
  if (minutes < 10) {

    timerLabel.textContent = "0" + minutes + ":" + seconds;
  }

  if (seconds < 10) {
    timerLabel.textContent = minutes + ":" + "0" + seconds;
  }
  if (minutes < 10 && seconds < 10) {
    timerLabel.textContent = "0" + minutes + ":" + "0" + seconds;
  }
}


function calculateTime() {
  if (seconds == 0) {
    minutes--;
    seconds = 60;
  }
}
function decrementTimer() {

  seconds--;
}

function stopTimer() {
  if (seconds == 0 && minutes == 0) {
    clearInterval(Clock);
    alarmSound.play();
    timerLabel.textContent = "Time is up!";
    alert("Time is up!")
    alarmSound.pause();

  }
}



function tick() {

  calculateTime();
  decrementTimer();
  formatTimer();
  stopTimer();
}
