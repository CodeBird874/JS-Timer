// HTML objects
let timerLabel = document.getElementById("timerLabel");
let alarmSound = document.getElementById("alarmsound");
// actual units of time
let hours;
let minutes;
let seconds;

// labels that format timer
let hourLabel;
let minuteLabel;
let secondLabel;
let fullLabel;
// other variables
let invalidTime = false;
alarmSound.loop = true;
// input from prompt is turned from a string to an int.
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
// to the labels.


function formatLabels() {
  if (hours <= 9) {
    hourLabel = "0" + hours;
  } else {
    hourLabel = hours;
  }
  if (minutes <= 9) {
    minuteLabel = "0" + minutes;
  } else {
    minuteLabel = minutes;
  }
  if (seconds <= 9) {
    secondLabel = "0" + seconds;
  } else {
    secondLabel = seconds;
  }

  fullLabel = hourLabel + ":" + minuteLabel + ":" + secondLabel;
}


function formatTimer() {

  formatLabels();

  // formats label for incorrect input.
  if (invalidTime) {
    timerLabel.textContent = "Please enter a valid time."
  } else {
    timerLabel.textContent = fullLabel;
    document.title = fullLabel;
  }
}

// prevents minutes/hours from hitting negative and removes a minute when 60 seconds has passed.
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
  // if all units are gone, remove the clock, change the text,
  // and notify the user time is up.
  if (seconds < 0 && minutes == 0 && hours == 0) {
    clearInterval(Clock);
    alarmSound.play();
    timerLabel.textContent = "Time is up!";
    document.title = "Time is up!";
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
