import { randomNumber } from '../utils.js';

export function getGreatestCommonDivisor() {
  console.log('Find the greatest common divisor of given numbers.');

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

  console.log(correctAnswer); // проверка числа

  console.log(`Question: ${numberOne} ${numberTwo}`);

  return correctAnswer;
}

export default getGreatestCommonDivisor;
