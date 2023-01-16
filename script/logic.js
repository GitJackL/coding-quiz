function startQuiz() {
  intervalId = setInterval(countdown,1000)
  // START QUIZ CODE NEEDED HERE
  presentQuestion();
  // Need to write function for presentQuestion

  //Hides the start screen
  document.getElementById("start-screen").classList.add("hide");
  //Show questions
  document.getElementById("questions").classList.remove("hide");''
}

