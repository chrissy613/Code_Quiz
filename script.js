//GLOBAL VARS
var startBtn = document.getElementById("startbtn");
var questionsEl = document.getElementById("questions");
var results = document.getElementById("results");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

//QUESTIONS AND ANSWERS
var questions = [{
    question: "Arrays are declared with:",
    answerA: "Curly Brackets",
    answerB: "Parenthesis",
    answerC: "Square Brackets",
    answerD: "Quotation Marks",
    correctAnswer: "c"
    },
    {
    question: "What does DOM stand for?",
    answerA: "Desktop Object Manipulation",
    answerB: "Document Object Model",
    answerC: "Document Ordinance Model",
    answerD: "Desktop Oriented Mode",
    correctAnswer: "b"
    },
    {
    question: "What provides the structure to a web page?",
    answerA: "CSS",
    answerB: "HTML",
    answerC: "Javascript",
    answerD: "jQuery",
    correctAnswer: "b"
    },
    {
    question: "jQuery is a simplified version of:",
    answerA: "HTML",
    answerB: "Python",
    answerC: "C++",
    answerD: "Javascript",
    correctAnswer: "d"
    },
    {
    question: "In Chrome DevTools, what can you use to see your logged scripts?",
    answerA: "Elements",
    answerB: "Console",
    answerC: "Network",
    answerD: "Application",
    correctAnswer: "b"
    },  
    {
    question: "What function can you use to generate a random number?",
    answerA: "Math.random()",
    answerB: "Math.generate()",
    answerC: "Number.generate()",
    answerD: "createRandomNumber()",
    correctAnswer: "a"
    }];

//TIMER
var timer = document.getElementById("timer");
var time = 60;
var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=time;
  time--;
  if (time === 0){
    clearInterval(interval);
    document.getElementById('timer').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

//START BUTTON
startBtn.addEventListener("click",startQuiz);
function startQuiz(){
    //if time < 60s
    $("#questions p").text(questions[0].question);
    $("#a").text(questions[0].answerA);
    $("#b").text(questions[0].answerB);
    $("#c").text(questions[0].answerC);
    $("#d").text(questions[0].answerD);

    //Add a clck event at each option button 
    //save selection to variable

    //if time > 60s && < 120s
    //Repeat same as above but with questions[1]

    //so on and so forth...
}
