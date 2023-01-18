var currentQuestionIndex = 0;

var questions = [ {  

  question: "What is the correct syntax for declaring a variable in JavaScript?",   
  choices: ["var x = 5;", "int x = 5;", "#x = 5;", "x := 5;"],
  answer: 0
},


{    
  question: "What is the output of the following code? let x = 5; let y = 10; console.log(x + y);",  
  choices: ["15", "\"5\" + \"10\"", "\"5 + 10\"", "Error"],
  answer: 0
},



{    
  question: "What is the correct way to add a comment in JavaScript?",  
  choices: ["* This is a comment", "// This is a comment", "# This is a comment","/* This is a comment */"],
  answer: 1
},



{    
  question: "What is the difference between let and var in JavaScript?", 
  choices: ["let is not supported in older browsers", "var is not supported in newer browsers", "let creates a block-scoped variable, while var creates a function-scoped variable", "let creates a function-scoped variable, while var creates a block-scoped variable"],
  answer: 2
},



{    
  question: "Which of the following is not a JavaScript data type?",   
  choices: ["String","Number","Boolean","File"],
  answer: 3
},
]


function presentQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-title").innerHTML = currentQuestion.question;
  document.getElementById("choices").innerHTML="";
  for (var choice of currentQuestion.choices) {
    var choiceButton = document.createElement("button");
    choiceButton.innerHTML = choice;
    choiceButton.addEventListener("click", answerQuestion);
    document.getElementById("choices").appendChild(choiceButton);
  }
}


function answerQuestion(event) {
  var selectedChoice = event.target.innerHTML; // get the text of the button clicked
  var currentQuestion = questions[currentQuestionIndex]; // get the current question
  if (selectedChoice === currentQuestion.choices[currentQuestion.answer]) { // check if the selected choice is the correct answer
    document.getElementById("feedback").innerHTML = "Correct";
    document.getElementById("feedback").classList.remove("hide");
    userAnswers.push(1); // add 1 to the userAnswers array to indicate a correct answer
  } else {
    document.getElementById("feedback").innerHTML = "Incorrect";
    document.getElementById("feedback").classList.remove("hide");
    time += 10;
    userAnswers.push(0); // add 0 to the userAnswers array to indicate an incorrect answer
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz(); // end the quiz when all questions have been answered
  } else {
    presentQuestion();
  }
}
