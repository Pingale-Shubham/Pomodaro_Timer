let timers = {}; // Store intervals
let timeLeft = {}; // Store remaining time for pause/resume

function toggleTimer(timerId, buttonId) {
    let button = document.getElementById(buttonId);
    
    if (timers[timerId]) {
        stopTimer(timerId, button); // If running, stop
    } else {
        startTimer(timerId, button); // If stopped, start
    }
}

function startTimer(timerId, button) {
    let timerElement = document.getElementById(timerId);
    let timeArray = timerElement.innerText.split(":");
    let minutes = parseInt(timeArray[0]);
    let seconds = parseInt(timeArray[1]);

    if (timeLeft[timerId]) {
        minutes = timeLeft[timerId].minutes;
        seconds = timeLeft[timerId].seconds;
    }

    timers[timerId] = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timers[timerId]);
            delete timers[timerId];
            button.innerText = "Start"; // Reset button text
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeLeft[timerId] = { minutes, seconds };
        }
    }, 1000);

    button.innerText = "Stop"; // Change button to Stop
}

function stopTimer(timerId, button) {
    clearInterval(timers[timerId]);
    delete timers[timerId];
    button.innerText = "Resume"; // Change button to Resume
}

function resetTimer(timerId, buttonId) {
    clearInterval(timers[timerId]);
    delete timers[timerId];

    let defaultTime = timerId === "timer1" ? "25:00" : timerId === "timer2" ? "05:00" : "15:00";
    document.getElementById(timerId).innerText = defaultTime;
    delete timeLeft[timerId];

    let button = document.getElementById(buttonId);
    button.innerText = "Start"; // Reset button text
}

function showTimer(timerId) {
    document.querySelectorAll(".timer-container").forEach(timer => {
        timer.style.display = "none";
    });
    document.getElementById(timerId).parentElement.style.display = "block";
}
