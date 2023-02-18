/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function getGreatestCommonDivisor(namePlayer) {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const minDevider = 1;
    const numberOne = Math.round(Math.random() * 100) + minDevider;
    const numberTwo = Math.round(Math.random() * 100) + minDevider;

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

    const playerAnswer = readlineSync.question('Your answer: ');

    if (Number(playerAnswer) === correctAnswer) {
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
