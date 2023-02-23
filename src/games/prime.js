import { randomNumber } from '../utils.js';

function isPrimeNumber() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const numberToCheck = randomNumber();
  let correctAnswer = 'yes';

  if (numberToCheck < 2) {
    correctAnswer = 'no';
  } else {
    let divider = Math.ceil(numberToCheck / 2);
    for (divider; divider > 1; divider -= 1) {
      if (numberToCheck % divider === 0) {
        correctAnswer = 'no';
        break;
      }
    }
  }
  console.log(`Question: ${numberToCheck}`);

  return correctAnswer;
}

export default isPrimeNumber;
