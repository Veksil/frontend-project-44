import { randomNumber } from '../utils.js';

function isEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const number = randomNumber();

  console.log(`Question: ${number}`);

  let correctAnswer = 'no';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  }
  return correctAnswer;
}

export default isEven;
