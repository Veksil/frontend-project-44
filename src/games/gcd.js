/* eslint-disable import/prefer-default-export */
import { randomNumber, getPlayerAnswer } from '../utils.js';

export function getGreatestCommonDivisor(namePlayer) {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const minDevider = 1;
    const numberOne = randomNumber() + minDevider;
    const numberTwo = randomNumber() + minDevider;

    let flag = false;
    let correctAnswer = Math.min(numberOne, numberTwo);

    while (flag === false) {
      if (numberOne % correctAnswer === 0 && numberTwo % correctAnswer === 0) {
        flag = true;
        break;
      }
      correctAnswer -= 1;
    }

    // console.log(correctAnswer); // проверка числа

    console.log(`Question: ${numberOne} ${numberTwo}`);

    const playerAnswer = Number(getPlayerAnswer());

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
