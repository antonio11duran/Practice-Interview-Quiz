var timer = document.getElementById("timer");
var quizContainer = document.getElementById("quizContainer");
var listEl = document.getElementById("listEl");
var startButton = document.getElementById("start-button");
var rightWrong = document.getElementById("rightWrong");

var timeLeft = 101;
var score = 0;
var qindex = 0;
var penalty = 5;

var quizQuestions = [
    {
        question: "Answer is b",
        answers: ["a", "b", "c", "d"],
        correct: "b"
    },
    {
        question: "Answer is b",
        answers: ["a", "b", "c", "d"],
        correct: "b"
    },
    {
        question: "Answer is b",
        answers: ["a", "b", "c", "d"],
        correct: "b"
    }
];

// timer works, need to connect to start with start button press
function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
    createQ(qindex);
}

var ulEl = document.createElement("ul")

function createQ(qindex) {
    quizContainer.innerHTML = "";
    ulEl.innerHTML = "";

    for (var i = 0; i < quizQuestions.length; i++) {
        var quizQ = quizQuestions[qindex].question;
        var quizA = quizQuestions[qindex].answers;
        quizContainer.textContent = quizQ;
    }

    quizA.forEach(function (createLi) {
        var quizList = document.createElement("li");
        quizList.textContent = createLi;
        quizContainer.appendChild(ulEL);
        ulEl.appendChild(quizList);
        createLi.addEventListener('click', (compare));
    })
}

function correctAnswer(event) {
    var choice = event.target;

    if (choice.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        if (choice.textContent === quizQuestions[qindex].correct) {
            score + 1;
            newDiv.textContent = "Correct Answer. Good job!"
        } else {
            timeLeft = timeLeft - penalty;
            newDiv.textContent = "Wrong answer. Time deducted."
        }
    }

    qindex++;

    if (qindex >= quizQuestions.length) {
        endGame();
        newDiv.textContent = "Quiz over. You scored " + score + " points!";
    } else {
        createQ(qindex);
    }
    quizContainer.appendChild(newDiv);
}

function endGame() {
    quizContainer.innerHTML = "";
    ulEl.innerHTML = "";

    var title = document.getElementById("title");
    title.textContent = "Quiz Over!";

    
    var initials = document.createElement("label");
    initials.setAttribute("id", "initials");
    initials.textContent = "Please enter your initials: ";
    
    var inputBox = document.createElement("input");
    inputBox.setAttribute("id", "inputBox");
    inputBox.setAttribute("type", "text");
    inputBox.textContent = "";

    var submitBox = document.createElement("button");
    submitBox.setAttribute("id", "submitBox");
    submitBox.setAttribute("type", "submit");
    submitBox.textContent = "Submit Score";

    quizContainer.appendChild(title);
    quizContainer.appendChild(initials);
    quizContainer.appendChild(inputBox);
    quizContainer.appendChild(submitBox);

    submitBox.addEventListener('click', function() {
        
    })
}