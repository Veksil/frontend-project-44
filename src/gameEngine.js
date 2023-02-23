import questionAboutPlayerName from "./cli.js";
import { getPlayerAnswer } from "./utils.js";

function gameEngine(game) {
  const namePlayer = questionAboutPlayerName();

  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = String(game());
    const playerAnswer = getPlayerAnswer();

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

export default gameEngine