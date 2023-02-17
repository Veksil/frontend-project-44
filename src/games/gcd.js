/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function getGreatestCommonDivisor(namePlayer) {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const numberOne = Math.round(Math.random() * 100);
    const numberTwo = 0;
    const minNumber = 1;

    

    let flag = false;
    const minValue = Math.min(minNumber, numberOne, numberTwo);
    const maxValue = Math.max(minNumber, numberOne, numberTwo);
    let correctAnswer = minValue;

    while (flag === false) {
      if (maxValue % correctAnswer === 0 && minValue % correctAnswer === 0) {
        flag = true;
        break;
      }
      correctAnswer -= 1;
    }

    console.log(`Question: ${minValue} ${maxValue}`);

    // console.log(correctAnswer); // проверка числа

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
