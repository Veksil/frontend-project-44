import { randomNumber } from '../utils.js';

export function calculator() {
  console.log('What is the result of the expression?');

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
  return correctAnswer;
}

export default calculator;
