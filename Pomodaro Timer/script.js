let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
    document.getElementById('startBtn').textContent = 'Pause';
  } else {
    isRunning = false;
    clearInterval(timer);
    document.getElementById('startBtn').textContent = 'Resume';
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateDisplay();
  document.getElementById('startBtn').textContent = 'Start';
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startBtn').textContent = 'Start';
    // You can add an alert or any other action when the timer completes
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
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById('timer').textContent = `${displayMinutes}:${displaySeconds}`;
}

// You can customize the time and add more features as needed.
