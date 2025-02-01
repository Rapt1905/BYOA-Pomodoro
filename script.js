let timeLeft = 25 * 60; // 30 minutes in seconds
let timerId = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId === null) {
        // Disable the minutes input while timer is running
        document.getElementById('minutes-input').disabled = true;
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(timerId);
                timerId = null;
                alert('Time is up!');
                resetTimer();
            }
        }, 1000);
    } else {
        clearInterval(timerId);
        timerId = null;
        // Enable the minutes input when timer is stopped
        document.getElementById('minutes-input').disabled = false;
    }
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    const minutesInput = document.getElementById('minutes-input');
    timeLeft = parseInt(minutesInput.value) * 60;
    minutesInput.disabled = false;
    updateDisplay();
}

// Initialize display
document.getElementById('minutes-input').addEventListener('change', function() {
    if (timerId === null) { // Only allow changes when timer is not running
        timeLeft = this.value * 60;
        updateDisplay();
    }
});
updateDisplay(); 