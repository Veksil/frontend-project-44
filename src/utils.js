import readlineSync from "readline-sync";

export function cycleThreeTimes() {
  for (let i = 0; i < 3; i += 1) {
    if (playerAnswer === correctAnswer) {
      console.log("Correct");
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${namePlayer}!`);
      break;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
}

export function randomNumber() {
  return Math.round(Math.random() * 100);
}

export function randomNumberInRange(minValue, maxValue) {
  return Math.round(minValue + Math.random() * (maxValue - minValue));
}

export function randomNumberForProgressionGame() {
  return Math.round(Math.random() * 10);
}

export function getPlayerAnswer() {
  return readlineSync.question("Your answer: ");
}
