
let timerLabel = document.getElementById("timerLabel");
let alarmSound = document.getElementById("alarmsound");
let hours;
let minutes;
let seconds;
let invalidTime = false;
alarmSound.loop = true;
// input from prompt is tprompt is turned from a string to an int.
function gatherInput() {


  let enterHours = prompt("Please enter hours: (must be a positive number below 24)", "1");

  let enterMinutes = prompt("Please enter minutes: (must be a positive number below 60)", "10");

  let enterSeconds = prompt("Please enter seconds: (must be a positive number below 60)", "10");





  hours = parseInt(enterHours);
  minutes = parseInt(enterMinutes);
  seconds = parseInt(enterSeconds);

}



// checks input and sets a bool off that prevents the clock from doing anything when it is created 
// if input is more than specified time or not entered.
function checkInputValidity() {
  if (minutes > 59 || minutes < 0) {


    invalidTime = true;
  }

  if (seconds > 59 || seconds < 0) {

    invalidTime = true;

  }
  if (hours > 23 || hours < 0) {
    invalidTime = true;
  }

  if (isNaN(minutes) || isNaN(seconds) || isNaN(hours)) {
    invalidTime = true;
  }
  if (invalidTime) {
    alert("Please enter a valid time.")
  }
}




// checks to see if minutes/seconds are less than 9, then adds/removes a 0 for proper formatting
function formatTimer() {
  if (minutes <= 9) {

    timerLabel.textContent = hours + ":" + "0" + minutes + ":" + seconds;
  }

  if (seconds <= 9) {
    timerLabel.textContent = hours + ":" + minutes + ":" + "0" + seconds;
  }
  if (minutes <= 9 && seconds <= 9) {
    timerLabel.textContent = hours + "0" + minutes + ":" + "0" + seconds;
  }
  if (minutes > 9 && seconds > 9) {
    timerLabel.textContent = hours + ":" + minutes + ":" + seconds;
  }
  // formats label for incorrect input.
  if (invalidTime) {
    timerLabel.textContent = "Please enter a valid time."
  }
}

// prevents minutes from hitting negative and removes a minute when 60 seconds has passed.
function calculateTime() {
  if (minutes == 0 && hours > 0) {
    hours--;
  }
  if (seconds == 0 && minutes > 0) {
    minutes--;
    // sets seconds to a a full minute. 
    seconds = 60;

  }
}

// ticks clock if valid input was entered.
function decrementTimer() {

  if (!invalidTime) {

    seconds--;
  }

}

function stopTimer() {
  // if seconds are gone, and minutes are gone, remove the clock change the text,
  // and notify the user time is up.
  if (seconds < 0 && minutes == 0 && hours == 0) {
    clearInterval(Clock);
    alarmSound.play();
    timerLabel.textContent = "Time is up!";
    alert("Time is up!")
    alarmSound.pause();

  }

}

// every timer function combined.
function tick() {
  calculateTime();
  decrementTimer();
  formatTimer();
  stopTimer();
}

gatherInput();
checkInputValidity();
formatTimer();
const Clock = setInterval(tick, 1000);
