//Questions 
var questionList = [{
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Hypertext MakeUp Language", "HomeText Machine Language", "None of the above"],
    correct: "Hypertext Markup Language",
},
{
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Coliding Sheet Sorting", "Constant Creative Sheets", "None of the above"],
    correct: "Cascading Style Sheets",
},
{
    question: "What is the DOM?",
    answers: ["Dicipher on meeting", "Drop Object Modulary", "Document object model", "None of the above"],
    correct: "Document object model",
},
{
    question: "Which means or in Javascript ?",
    answers: ["X", "||", "!", "None of the above"],
    correct: "||",
},
{
    question: "Which one is NOT a primitive type in Javascript?",
    answers: ["Sting", "Boolean", "Null", "Object"],
    correct: "Object",
},
];

var secondsLeft = 15;

var timerInterval // can call in another function to clear the timer

var score = 0


var highscores = document.getElementById("highscores")
var timerEl = document.getElementById("timer")
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var startButton = document.getElementById("start-btn")
var questionContainerEl = document.getElementById("question-container")
startButton.addEventListener("click", startQuiz)

let currentQuestionIndex = 0;

function startQuiz(questions) {
    currentQuestionIndex = 0;
    console.log("started")
    showQuestion()
    showAnswers()
    startTime()
}

function showQuestion() {
    //shows the question 
    questionEl.innerText = questionList[currentQuestionIndex].question
    //if statement to make a clear set interval and call a function to display result
}

function onAnswerClick(ev) {
    // grab answer from clicked element
    let answer = ev.srcElement.innerText;
    // compare answer with correct answer from array of questionlist above
    if(answer === questionList[currentQuestionIndex].correct) {
        score++;
    }
    else {//subtact time from timer (only one second tho :/)
        secondsLeft--
        
    }
    // answer is correct so move to next question and update screen
    currentQuestionIndex++;
    showQuestion();
    showAnswers();
}

function showAnswers() {
    // clear contents
    document.getElementById("answer-buttons").innerHTML = "";

    //creates ul to show answers
    let questionContainer = document.createElement("div");
    questionList[currentQuestionIndex].answers.forEach(myFunction);
    document.getElementById("answer-buttons").appendChild(questionContainer);

    function myFunction(value) {
        let option = document.createElement("button");
        option.className = "answer";
        option.innerText = value;
        option.addEventListener("click", onAnswerClick);
        questionContainer.appendChild(option);
    }
    answerButtonsEl.addEventListener("click", showQuestion);
    
}


function startTime(){
     timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft
        if(secondsLeft <= 0){
            clearInterval(timerInterval);
            //make a function to display score
            sendMessage();
        }
    }, 1000)
}

function sendMessage() {
    timerEl.textContent = "Time Up"
    highscores.textContent = score
    if(timerEl == 0 ) {
        prompt(userName)
    }
}


var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

//when the game is finished and you actually have a score
let userScoreObject = {name: userName,score:score}



//then do a for loop to write a table with all the scores, sorted by score number

//then save the new score array

highScores.push(userScoreObject)
localStorage.setItem("highscores",JSON.stringify(highScores))