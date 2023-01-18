function displayHighscores() {
  for (var i = 0; i < highscores.length; i++) {
    var score = highscores[i];
    var li = document.createElement("li");
    li.textContent = score.initials + " - " + score.score;
    highscoresList.appendChild(li);
  
  
    var highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";


  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.sort(function(a, b) {
    return a.score - b.score;
  });
  }
}

function clearHighscores() {
  localStorage.removeItem("highscores");
  displayHighscores();
}

displayHighscores();

