let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;
const beep = new Audio("https://www.soundjay.com/button/beep-07.wav"); // Beep sound URL

function startTimer() {
  const startBtn = document.getElementById("startBtn");

  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
    startBtn.textContent = "Pause";
  } else {
    isRunning = false;
    clearInterval(timer);
    startBtn.textContent = "Resume";
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
  document.getElementById("startBtn").textContent = "Start";
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startBtn").textContent = "Start";
    beep.play(); // Play sound when timer finishes
    alert("Time's up! Take a break."); // Notify user
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("timer").textContent = 
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Initialize timer display
updateDisplay();
