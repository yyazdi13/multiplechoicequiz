var start = document.querySelector("#start");
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var startTimer = 30;
var correct = 0;
var incorrect = 0;
var currentIndex = 0;
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings ", "booleans ", "alerts ", "numbers "],
      answer: 'choice3'
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 'choice3'
    },
    {
        title: "script tags go in: ___",
        choices: ["title", "css", "div", "body"],
        answer: 'choice4'
      }
  ];

function setTime() {
    var timerInterval = setInterval(function() {
      startTimer--;
      timer.textContent = startTimer + " seconds left.";
  
      if(startTimer === 0 || currentIndex === questions.length) {
        clearInterval(timerInterval);
        timer.textContent = "";
        alert("finish");
        results();
      }
  
    }, 1000);
  }

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var c = questions[currentIndex].choices;
        var q = questions[currentIndex].title;
        choice1.innerHTML = c[0];
        choice2.innerHTML = c[1];
        choice3.innerHTML = c[2];
        choice4.innerHTML = c[3];
        question.innerHTML = q;
    }
       
   
}  

function checkAnswer(answer) {
    if (questions[currentIndex].answer == answer) {
        alert("correct");
        correct++;
        nextQuestion();
    }
    else {
        alert("incorrect");
        incorrect++;
        startTimer= startTimer - 8;
        nextQuestion();
    }
}

function nextQuestion(){
    currentIndex++;
    displayQuestions();
    
}

function results(){
    var score = parseInt(correct) + parseInt(startTimer);
    question.innerHTML = "score: " + score;
    quiz.innerHTML = "correct: " + correct + " " + "incorrect: " + incorrect;
    quiz.style.fontSize = "24px";
    quiz.style.color = "sienna";
    var save = document.createElement("button");
    save.innerHTML = "type your name and click to save";
    quiz.append(save);
    var input = document.createElement("input");
    input.style.margin = "10px";
    quiz.append(input);
    save.addEventListener("click", function (event) {
      event.preventDefault();
      var highscore = JSON.parse(localStorage.getItem('highscore')) || [];
      var userScore = input.value + " " + score + " ";
      highscore.push(userScore);
      localStorage.setItem('highscore', JSON.stringify(highscore));
      timer.innerHTML = highscore;

    });
}




start.addEventListener("click", function () {    
setTime();
displayQuestions();
start.style.display = "none";
})


