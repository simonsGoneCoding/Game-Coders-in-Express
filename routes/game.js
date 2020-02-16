function gameRoutes(app) {
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

  app.post("/answer/:index", (req, res) => {
    const { index } = req.params;
    console.log(index);
  });
}

module.exports = gameRoutes;
