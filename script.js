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
];

var score = 0

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
    // for (var i=0; i < questionList.length; i++){
    //     response = 
    // }
}

function showQuestion() {
    //shows the question 
    questionEl.innerText = questionList[currentQuestionIndex].question

}

function onAnswerClick(ev) {
    // grab answer from clicked element
    let answer = ev.srcElement.innerText;
    // compare answer with correct answer from array of questionlist above
    if(answer === questionList[currentQuestionIndex].correct) {
    }
    else {
        console.log("BAD");
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
    let questionContainer = document.createElement("ul");
    questionList[currentQuestionIndex].answers.forEach(myFunction);
    document.getElementById("answer-buttons").appendChild(questionContainer);

    function myFunction(value) {
        let option = document.createElement("li");
        option.className = "answer";
        option.innerText = value;
        option.addEventListener("click", onAnswerClick);
        questionContainer.appendChild(option);
    }
    answerButtonsEl.addEventListener("click", showQuestion);
    //  nextQuestion()
}
