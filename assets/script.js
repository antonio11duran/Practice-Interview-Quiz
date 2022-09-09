var timer = document.querySelector("timer");
var title = document.getElementById("title");
var question = document.getElementById("question");
var listEl = document.getElementById("listEl")
var startButton = document.querySelector(".start-button");

var timeLeft = 60;

// timer works, need to connect to start with start button press
function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function questionOne() {
    setTime();

    // startButton.disabled = true;

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    li1.textContent = "a";
    li2.textContent = "b";
    li3.textContent = "c";
    li4.textContent = "d";

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
}

// put setTime as a filler function. replace with quiz function once created.
startButton.addEventListener('click', questionOne);