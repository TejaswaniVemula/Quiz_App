const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    question: "Who developed JavaScript?",
    a: "Brendan Eich",
    b: "Elon Musk",
    c: "Mark Zuckerberg",
    d: "Linus Torvalds",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Tool Multi Language",
    correct: "a",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function deselectAnswers() {
  answerEls.forEach(el => el.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(el => {
    if (el.checked) answer = el.id;
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored ${score}/${quizData.length}</h2>
                        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
