var timer = document.querySelector(".timer");
var title = document.getElementById(".title");
var question = document.getElementById(".question");

var timeLeft = 60;

// timer works, need to connect to start with start button press
function setTime() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// delete this function to stop automatic countdown on page load
setTime();