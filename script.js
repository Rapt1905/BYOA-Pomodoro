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
        document.getElementById('minutes-input').disabled = true;
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft === 0) {
                clearInterval(timerId);
                timerId = null;
                const audio = document.getElementById('timerComplete');
                audio.play();
                alert('Time is up!');
                resetTimer();
            }
        }, 1000);
    } else {
        clearInterval(timerId);
        timerId = null;
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

function updateTimer() {
    if (timeLeft > 0) {
        // ... existing timer update code ...
    } else {
        clearInterval(timerInterval);
        const audio = document.getElementById('timerComplete');
        audio.play();
        // ... rest of completion code ...
    }
}

// Add this at the bottom of your script
document.getElementById('timerComplete').load(); 