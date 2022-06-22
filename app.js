const answerList = [
  "It is certain",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "Most likely",
  "Signs point to yes",
  "Ask again later",
  "Better not tell you now",
  "Concertrate and ask again",
  "Don't count on it",
  "My sources say no",
  "My reply is no",
  "Very doubtful",
  "Outlook not so good",
];
let form = document.querySelector("form");
let answer = document.getElementById("text");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //Stops From Auto Submitting
  let randomNumber = Math.floor(Math.random() * answerList.length);
  console.log(answerList[randomNumber]);
  answer.innerHTML = answerList[randomNumber];
});
