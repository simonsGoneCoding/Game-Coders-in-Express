const question = document.querySelector("#question");

function fillQuestionElement(data) {
  question.innerText = data.question;
  data.answers.forEach((answer, index) => {
    document.querySelector(`#answer${index + 1}`).innerText = answer;
  });
}

function showNextQuestion() {
  fetch("/question", { method: "GET" })
    .then(data => data.json())
    .then(data => fillQuestionElement(data));
}

showNextQuestion();

function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, { method: "POST" })
    .then(data => data.json())
    .then(data => console.log(data));
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", function() {
    const answerIndex = this.dataset.answer;
    // console.log(typeof answerIndex);
    sendAnswer(answerIndex);
  });
}
