//Questions 
var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hypertext MakeUp Language", correct: false},
            {text: "HomeText Machine Language", correct: false},
            {text: "None of the above", correct: false}

        ]
    
    },
    {
        question: "What does CCS stand for?",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Coliding Sheet Sorting", correct: false},
            {text: "Constant Creative Sheets", correct: false},
            {text: "None of the above", correct: false}

        ]
    
    },
    {
        question: "What is the DOM?",
        answers: [
            {text: "Document object model", correct: true},
            {text: "Dicipher on meeting", correct: false},
            {text: "HomeText Machine Language", correct: false},
            {text: "Drop Object Modulary", correct: false}

        ]
    
    },
    
]

var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var startButton = document.getElementById("start-btn")
var questionContainerEl = document.getElementById("question-container")
startButton.addEventListener("click", startQuiz)

function startQuiz (){
console.log("started")
//hides start button after click
startButton.classList.add("hide") 
//shows questions after click on start
questionContainerEl.classList.remove("hide") 
}

function showQuestion(question) {
    questionEl.innerText = questions.question
}

function startTimer(){

}

function correctAnswers(){

}

function incorrectAnswers(){

}

function finalScore(){

}

