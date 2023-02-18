import { calculator } from "./games/calc.js";
import { getPlayerName } from "./cli.js";
import { getPlayerAnswer } from "./utils.js";

// eslint-disable-next-line import/prefer-default-export
export function gameEngine() {
  const namePlayer = getPlayerName();

  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = calculator();
    const playerAnswer = Number(getPlayerAnswer());

    if (playerAnswer === correctAnswer) {
      console.log("Correct");
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
          Let's try again, ${namePlayer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
}
