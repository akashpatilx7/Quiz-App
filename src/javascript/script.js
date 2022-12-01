/************** GOOD PRACTICE ************
 
  
While declaring a function, first check wheather its "SYNTAX ERROR FREE" by declaring an ALERT inside and by checking if the ALERT NOTIFICATION pops up or not.


*/


// Declaring an Array to store the "Questions & its Answer Options List" that will be shown in the Quiz App
const quizData = [
  {
    question: "What does HTML stands for ?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct: "c",
  },
  {
    question: "Which language runs in a Web Browser ?",
    a: "Java",
    b: "C",
    c: "Javascript",
    d: "Python",
    correct: "c",
  },
  {
    question: "What is an Operating System ?",
    a: "interface between the hardware and application programs",
    b: "collection of programs that manages hardware resources",
    c: "system service provider to the application programs",
    d: "all of the mentioned",
    correct: "d",
  },
  {
    question: "What is a bit array ?",
    a: "Data structure for representing arrays of records",
    b: "Data structure that compactly stores bits",
    c: "An array in which most of the elements have the same value",
    d: "Array in which elements are not present in continuous locations",
    correct: "b",
  },
  {
    question: "Which of the following is not a disadvantage of bit array ?",
    a: "Without compression, they might become sparse",
    b: "Accessing individual bits is expensive",
    c: "Compressing bit array to byte/word array, the machine also has to support byte/word addressing",
    d: "Storing and Manipulating in the register set for long periods of time",
    correct: "d",
  },
];



// ************* STORING ALL THE ELEMENTS/ TAGS AVAILABLE IN OUR PROJECT INTO VARIABLES FOR FURTHER EASY USE & SIMPLICITY OF THE TASK. ************

const quiz = document.getElementById("quiz");


// Here, as we have more than 1 "answer" (i.e. answer as a class), so we will have to use document.querySelectorAll
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");



// ************ FUNCTIONS ************

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deselectAnswers();
  /* alert("");
  Gives a specific ALERT to the USER (if required to be given) */

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}



function deselectAnswers() {
  answersEls.forEach((answersEl) => (answersEl.checked = false));
  // Deselecting the already selected Answer Option (IF ANY)
}



// NOTE : TO CHECK WHEATHER THE ANSWER SELECTED BY THE USER IS CORRECT OR NOT, WE WILL MATCH IT TO THE CREATED VARIABLE "answer".
// Creating a variable for storing the ID of a Selected Variable.


function getSelected() {
  let answer;

  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });
  return answer;
}



// ************ SUBMIT BUTTON ************

submitBtn.addEventListener("click", () => {
  // alert("");
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // alert("");
      quiz.innerHTML = `<h2>You have Completed the Quiz Succesfully ! 🥳 Your SCORE is ${score}/${quizData.length}.
      <button onclick="location.reload()">Restart The Quiz</button>`;
    }
  }
});



// NOTE : BY USING ``, WE CAN WRITE TEXT AND VARIABLES BOTH. THEREFORE BACKTICKS ARE PREFERRED WHILE USING INNERHTML TO WRITE SOMETHING IN THE WEB PAGE.