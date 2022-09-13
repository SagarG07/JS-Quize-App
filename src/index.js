import "./styles.css";
const quizeData = [
  {
    question: "which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "phython",
    d: "JavaScipt",
    correct: "d"
  },
  {
    question: "What does CSS stands for ?",
    a: "Central Style sheet",
    b: "Cascading style sheet",
    c: "Cascading simple sheet",
    d: "Cars SUVs sails boat",
    correct: "b"
  },
  {
    question: "What does HTML stands for ?",
    a: "Hypertext mark language",
    b: "Hyper Markup language",
    c: "Hyperloop machine language",
    d: "Halicapter terminals Motercycle lamborgini",
    correct: "a"
  },
  {
    question: "What year Javascript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the Abpve",
    correct: "b"
  }
];

const quize = document.getElementById("quize");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuize = 0;
let score = 0;

const deslectorAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuize = () => {
  deslectorAnswers();
  const currentQuizData = quizeData[currentQuize];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuize();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizeData[currentQuize].correct) score++;
    currentQuize++;
    if (currentQuize < quizeData.length) loadQuize();
    else {
      quize.innerHTML = `<h2>You Answered
    ${score}/${quizeData.length} question correctly</h2>
    <button onclick="history.go(0)">Play Again </button>`;
    }
  }
});
