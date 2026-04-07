
let timerLabel = document.getElementById("timerLabel");
let alarmSound = document.getElementById("alarmsound");
let minutes;
let seconds;
let invalidTime = false;

alarmSound.loop = true;
// input from user is entered and processed
function gatherInput() {

  let enterMinutes = prompt("Please enter minutes: (must be a positive number below 60)", "10");

  let enterSeconds = prompt("Please enter seconds: (must be a positive number below 60)", "10");





  minutes = parseInt(enterMinutes);
  seconds = parseInt(enterSeconds);
  if (minutes > 59 || minutes < 0) {

    alert("Please enter a valid time!");

    invalidTime = true;
  } else {

  }
  if (seconds > 59 || seconds < 0) {

    alert("Please enter a valid time!");
    invalidTime = true;
  }


}






gatherInput();
formatTimer();

const Clock = setInterval(tick, 1000);







function formatTimer() {
  if (minutes < 10) {

    timerLabel.textContent = "0" + minutes + ":" + seconds;
  }

  if (seconds <= 9) {
    timerLabel.textContent = minutes + ":" + "0" + seconds;
  }
  if (minutes <= 9 && seconds <= 9) {
    timerLabel.textContent = "0" + minutes + ":" + "0" + seconds;
  }
  if (minutes > 9 && seconds > 9) {
    timerLabel.textContent = minutes + ":" + seconds;
  }
}


function calculateTime() {
  if (minutes > 0) {
    if (seconds == 0) {
      minutes--;
      seconds = 60;
    }
  }
}
function decrementTimer() {
  if (!invalidTime) {

    seconds--;
  }

}

function stopTimer() {
  if (seconds < 0 && minutes == 0) {
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
