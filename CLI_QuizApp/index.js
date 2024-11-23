const readLineSync = require("readline-sync");
let kuler = require("kuler");

const database = {
  data: [
    {
      question: `let a = {}, b= {}
console.log(a == b)
console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy",
      options: {
        a: "deep copy",
        b: "shallow copy",
        c: "Nested copy",
        d: "Creates anew reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible for forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 2,
    },
  ],
};
let score = 0;
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler(`\nCorrect answer\n`, "#a3e635"));
    score++;
  } else {
    console.log(kuler(`\nIncorrect answer\n`, "#991b1b"));
  }
}

function showHighScorer(leaderBoard, userName, score) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedleaderBoard = leaderBoard.data.sort((a, b) => b.score - a.score);

  console.log(`Leader :      Score`);
  for (let leader of sortedleaderBoard) {
    console.log(kuler(`${leader.name} :    ${leader.score}`, "#d97706"));
  }
}
function showQuestionAnswers() {
  let userName = readLineSync.question(kuler("What's your name ?", "#a3e635"));
  console.log(kuler(`Welcome to Quizzify ${userName}`, "#fca5a5"));
  for (let i = 0; i < database.data.length; i++) {
    console.log(`${i + 1} : ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}\n`);
    }
    let option = ["a", "b", "c", "d"];

    readLineSync.setDefaultOptions({
      limit: option,
    });

    let userAnswer = readLineSync
      .question("Enter your answer - (a/b/c/d) -  ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
  showHighScorer(leaderBoard, userName, score);
  console.log(kuler(`\nYour score is ${score} 🥳🎉🎊🙌 `, "#e879f9"));
}
showQuestionAnswers();
