//Questions 
var questionList = {
    question: "What does HTML stand for?",
    answers: ["Hypertext Markup Language", "Hypertext MakeUp Language", "HomeText Machine Language", "None of the above"]
}
   
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var startButton = document.getElementById("start-btn")
var questionContainerEl = document.getElementById("question-container")
startButton.addEventListener("click", startQuiz)

let currentQuestionIndex

function startQuiz (questions){
console.log("started")
showQuestion()
showAnswers()
}

function showQuestion() {
    //shows the question 
    questionEl.innerText = questionList.question
    
}

 function showAnswers(){
     //creates ul to show answers
     let text = "<ul>";
questionList.answers.forEach(myFunction);
text += "</ul>";
document.getElementById("answer-buttons").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
 }
 clickableAnswers()
}

function clickableAnswers() {
    answerButtonsEl.addEventListener("click", function(){
        console.log("cliked")
    })
}