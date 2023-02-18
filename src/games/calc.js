/* eslint-disable import/prefer-default-export */
import { randomNumber, getPlayerAnswer } from '../utils.js';

export function calculator(namePlayer) {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const listValue = ['+', '-', '*'];
    const randomNumberForValue = Math.floor(Math.random() * listValue.length);
    const randomValue = listValue[randomNumberForValue];
    let correctAnswer = '';

    console.log(`Question: ${firstNumber} ${randomValue} ${secondNumber}`);

    if (randomNumberForValue === 0) {
      correctAnswer = firstNumber + secondNumber;
    } else if (randomNumberForValue === 1) {
      correctAnswer = firstNumber - secondNumber;
    } else if (randomNumberForValue === 2) {
      correctAnswer = firstNumber * secondNumber;
    }

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
