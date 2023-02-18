/* eslint-disable import/prefer-default-export */
import { randomNumber, getPlayerAnswer } from '../utils.js';

export function isEven(namePlayer) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();

    console.log(`Question: ${number}`);

    const playerAnswer = getPlayerAnswer();

    let correctAnswer = 'no';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    }

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
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
