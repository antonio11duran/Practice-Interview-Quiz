var highscoreList = document.querySelector("#highscoreList");
var backButton = document.querySelector("#backButton");
var resetButton = document.querySelector("#resetButton");

var highscores = localStorage.getItem("highscores");
highscores = JSON.parse(highscores);

if (highscores !== null) {
    for (var i = 0; i < highscores.length; i++) {
        var liEL = document.createElement("li");
        liEL.textContent = highscores[i].initial + " " + highscores[i].score;
        highscoreList.appendChild(liEL);        
    }
}

resetButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
})