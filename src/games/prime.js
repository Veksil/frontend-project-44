import { randomNumber } from '../utils.js';

function isPrimeNumber() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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

  return correctAnswer;
}

export default isPrimeNumber;
