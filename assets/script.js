var timer = document.querySelector("#timer");
var quizContainer = document.querySelector("#quizContainer");
var listEl = document.querySelector("#listEl");
var startButton = document.querySelector("#startButton");
var rightWrong = document.querySelector("#rightWrong");
var title = document.querySelector("#title");

var timeLeft = 101;
var score = 0;
var timerInterval = 0;
var qindex = 0;
var penalty = 5;

var quizQuestions = [
    {
        question: "Answer is a",
        answers: ["a", "b", "c", "d"],
        correct: "a"
    },
    {
        question: "Answer is b",
        answers: ["a", "b", "c", "d"],
        correct: "b"
    },
    {
        question: "Answer is c",
        answers: ["a", "b", "c", "d"],
        correct: "c"
    }
];

startButton.addEventListener("click", function () {
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);

    createQ(qindex);
});


var ulEl = document.createElement("ul");

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
        quizContainer.appendChild(ulEl);
        ulEl.appendChild(quizList);
        quizList.addEventListener("click", (correctAnswer));
    })
}

function correctAnswer(event) {
    var choice = event.target;

    if (choice.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

        if (choice.textContent === quizQuestions[qindex].correct) {
            score = score + 1;
            newDiv.textContent = "Correct Answer. Good job!"
        } else {
            timeLeft = timeLeft - penalty;
            newDiv.textContent = "Wrong answer. Time deducted."
        }
    }

    qindex++;

    if (qindex >= quizQuestions.length) {
        endGame();
        newDiv.textContent = "Quiz over. You scored " + score + " questions correct!";
    } else {
        createQ(qindex);
    }
    quizContainer.appendChild(newDiv);
}

function endGame() {
    quizContainer.innerHTML = "";
    ulEl.innerHTML = "";

    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var paraEl = document.createElement("p");
        clearInterval(timerInterval);
        paraEl.textContent = "Your final score is: " + timeRemaining;
        timer.innerHTML = "";

        quizContainer.appendChild(paraEl);
    }

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

    submitBox.addEventListener('click', function () {
        var scoreInfo = inputBox.value;
        if (scoreInfo === null) {
            console.log("No initials entered");
        } else {
            var finalScore = {
                initial: scoreInfo,
                score: timeRemaining
            }
            console.log(finalScore);
            var highscores = localStorage.getItem("highscores");
            if (highscores === null) {
                highscores = [];
            } else {
                highscores = JSON.parse(highscores);
            }
            highscores.push(finalScore);
            var newScore = JSON.stringify(highscores);
            localStorage.setItem("highscores", newScore);

            window.location.replace("./highscores.html");
        }
    });

}