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
