var quizArray = [
    {
        question: 'When Hazrat Imam Hussain a.s Born ?',
        anwser: '10 January 626 CE',
        options: [
            "08 January 626 CE",
            "10 January 626 CE",
            "12 march 626 CE",
            "none of the above"
        ]
    },
    {
        question: 'When Hazrat Imam Hussain a.s shaheed  ?',
        anwser: '10 October 680',
        options: [
            "10 October 680 CE",
            "12 January 680 CE",
            "15 ctober 680 CE",
            "none of the above"
        ]
    },
    {
        question: 'Cause of death of  Hazrat Imam Hussain a.s (الحسين بن عليHusayn ibn Ali)  ?',
        anwser: 'Killed at the Battle of Karbala',
        options: [
            "passes away due to being crushed under something in karbala",
            "passes away due to an abdominal disease",
            "Killed at the Battle of Karbala",
            "none of the above"
        ]
    },
    {
        question: 'When Imam Hussain left Mecca to start Journey towards Kufa ?',
        anwser: 'Both of them',
        options: [
            "9 September 680 (8 Dhu al-Hijjah 60 AH)",
            "A day before Hajj. He took the northerly route through the Arabian Desert.",
            "none of the above",
            "Both of them",
        ]
    },
]
var questions = document.getElementById("questions");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var currentAnswer = document.getElementById("currentAnswer")
var indexNUmber = 0;
var score = 2.5;

function startQuiz() {
    questions.innerHTML = quizArray[indexNUmber].question;
    currentAnswer.innerHTML = "";
    for (var i = 0; i < quizArray[indexNUmber].options.length; i++) {
        currentAnswer.innerHTML += ` <div class="col-md-6 py-2 ">
        <button onclick="checkQuestion()" class="btn w-100 btn-secondary">${quizArray[indexNUmber].options[i]}</button>
    </div>`
    }
    totalQuestion.innerHTML = quizArray.length;
    currentQuestion.innerHTML = indexNUmber + 1

}
function nextQuestion() {
    if (indexNUmber == quizArray.length - 1) {
        alert("Quiz Complete \n your score ")
    } else {
        indexNUmber = indexNUmber + 1;
        startQuiz()
    }

}

function checkQuestion(userinp, anwser) {
    if (userinp == anwser)
    score = score + 2.5
    console.log("score Fuction in process not complete")
}