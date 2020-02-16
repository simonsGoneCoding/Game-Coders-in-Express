const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, "127.0.0.1", () => {
  console.log("server is listening at http://localhost:3000/");
});

app.use(express.static(path.join(__dirname, "./public")));

let goodAnswers = 0;
let callAFriendUsed = false;
let askTheAudienceUsed = false;
let fiftyFiftyUsed = false;

const questions = [
  {
    question: "When is Earth closest to the Sun?",
    answers: ["Autum", "Winter", "Summer", "Spring"],
    correctAnswer: 1
  },
  {
    question: "How was first ever discovered neutron star named?",
    answers: ["Sirius", "MZ78", "Sagitarius A", "LGM (little green man)"],
    correctAnswer: 3
  },
  {
    question: "What is the smallest particle of an atom?",
    answers: ["Electron", "Proton", "Quark", "Neutron"],
    correctAnswer: 2
  }
];

app.get("/question", (req, res) => {
  if (goodAnswers === questions.length) {
    res.json({
      winner: true
    });
  } else {
    const nextQuestion = questions[goodAnswers];
    const { question, answers } = nextQuestion;
    res.json({
      question,
      answers
    });
  }
});
