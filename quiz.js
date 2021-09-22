var quizAns = ["90","right angled"];
var form = document.querySelector(".quiz-form");
var btnQuiz = document.querySelector("#btn-submit-quiz");
var quizOutput = document.querySelector("#quiz-output");

btnQuiz.addEventListener("click", handleQuiz);

function handleQuiz() {
    quizOutput.style.display = "inline-block";
    var score = 0;
    var idx= 0
    var formRes = new FormData(form);
    for(let ans of formRes.values()) {
        if(quizAns[idx] === ans) {
            score += 1; 
        }
        idx += 1;
    }
    if(score===quizAns.length) {
        quizOutput.style.color = "green";
    } else if(score === 0) {
        quizOutput.style.color = "red";
    }
    if(idx=== quizAns.length) {
    quizOutput.innerText = "your score is : " + score;
    }else{
        quizOutput.style.color = "black";
        quizOutput.innerText = "please select the options"
    }
}