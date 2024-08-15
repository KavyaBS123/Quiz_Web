const questions=[
    {
        question:"What will be the output of following code console.log(typeofNaN); ?",
        answers:[
            {text:"Number",correct:true},
            {text:"NaN",correct:false},
            {text:"Undefined",correct:false},
            {text:"Object",correct:false},

            
        ]
    },
       {

        question:"Which of the following is not a Javascript data  ?",
        answers:[
            {text:"Number",correct:false},
            {text:"Boolean",correct:false},
            {text:"Float",correct:true},
            {text:"String",correct:false},

            
        ]
    },
       {

        question:"How can you add comments in JavaScript?",
        answers:[
            {text:"This is a comment",correct:false},
            {text:"#This is a comment",correct:false},
            {text:"// This is a comment",correct:true},
            {text:"**This is a comment",correct:false},

            
        ]
    },
       {

       question:"Which method is used to parse a string to an integer in JavaScript ?",
        answers:[
            {text:"ParseFloat()",correct:false},
            {text:"ParseInt()",correct:true},
            {text:"Number()",correct:false},
            {text:"String()",correct:false},

            
        ]
    },
       {

       question:"What will be the output of following code? console.log(0.1+0.2===0.3);",
        answers:[
            {text:"true",correct:false},
            {text:"false",correct:true},
            {text:"undefined",correct:false},
            {text:"NaN",correct:false},

            
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
 let questionNo=currentQuestionIndex+1;
 questionElement.innerHTML=questionNo+" ."+currentQuestion.
 question;
 currentQuestion.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
button.addEventListener("click",selectAnswer);

 });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
});

startQuiz();