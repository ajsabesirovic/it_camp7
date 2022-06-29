let seconds = 00;
let miliseconds = 00;

const appendmiliseconds = document.getElementById("miliseconds");
const appendSeconds = document.getElementById("seconds");

const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let Interval;

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  miliseconds = "00";
  seconds = "00";
  appendmiliseconds.innerHTML = miliseconds;
  appendSeconds.innerHTML = seconds;
};

function startTimer() {
  miliseconds++;

  if (miliseconds <= 9) {
    appendmiliseconds.innerHTML = "0" + miliseconds;
  }

  if (miliseconds > 9) {
    appendmiliseconds.innerHTML = miliseconds;
  }

  if (miliseconds > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    miliseconds = 0;
    appendmiliseconds.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
