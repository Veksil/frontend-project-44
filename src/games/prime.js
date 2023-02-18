/* eslint-disable import/prefer-default-export */
import { randomNumber, getPlayerAnswer } from '../utils.js';

export function isPrimeNumber(namePlayer) {
  for (let i = 0; i < 3; i += 1) {
    console.log(
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    );

    const number = randomNumber();
    let correctAnswer = 'yes';

    if (number < 2) {
      correctAnswer = 'no';
    } else {
      let divider = Math.ceil(number / 2);
      for (divider; divider > 1; divider -= 1) {
        if (number % divider === 0) {
          correctAnswer = 'no';
          break;
        }
      }
    }
    console.log(`Question: ${number}`);

    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === correctAnswer) {
      console.log('Correct');
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
