var time = 60;
var intervalId;
var currentQuestionIndex = 0;
var correctAnswers = 0;
var userAnswers = [];
var initials ="";

function startQuiz() {
  intervalId = setInterval(countdown,1000)
  // START QUIZ CODE NEEDED HERE
  presentQuestion();
  // Need to write function for presentQuestion

  //Hides the start screen
  document.getElementById("start-screen").classList.add("hide");
  //Show questions
  document.getElementById("questions").classList.remove("hide");
}


function countdown() {
  time--;
  document.getElementById("time").innerHTML = time;
  if (time === 0) {
      clearInterval(intervalId);
      console.log( "You are out of time")
  }
}




function endQuiz() {
  clearInterval(intervalId);
  var score = userAnswers.reduce((total, answer) => total + answer, 0);
  var initials =prompt("Enter your initials:");
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ initials: initials, score: score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
  displayHighscores();
}
