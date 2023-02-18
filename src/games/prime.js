/* eslint-disable import/prefer-default-export */
import readlineSync from "readline-sync";

export function isPrimeNumber(namePlayer) {
  for (let i = 0; i < 3; i += 1) {
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".'
    );

    const randomNumber = Math.round(Math.random() * 100);
    let correctAnswer = "yes";

    if (randomNumber < 2) {
      correctAnswer = "no";
    } else {
      let divider = Math.ceil(randomNumber / 2);
      for (divider; divider > 1; divider -= 1) {
        if (randomNumber % divider === 0) {
          correctAnswer = "no";
          break;
        }
      }
    }
    console.log(`Question: ${randomNumber}`);

    const playerAnswer = readlineSync.question("Your answer: ");

    if (playerAnswer === correctAnswer) {
      console.log("Correct");
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${namePlayer}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${namePlayer}!`);
    }
  }
}
