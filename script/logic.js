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


function countdown() {
  time--;
  document.getElementById("time").innerHTML = time;
  if (time === 0) {
      clearInterval(intervalId);
      console.log( "You are out of time")
  }
}

var time = 60;
var intervalId;
