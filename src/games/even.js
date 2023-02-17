/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function isEven(namePlayer) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    const minDevisorEvenNumber = 1;
    let checkEven = 'yes';

    if (randomNumber < minDevisorEvenNumber) {
      checkEven = 'no';
      break;
    } else {
      let numberDivisor = Math.ceil(randomNumber / 2);
      while (numberDivisor > minDevisorEvenNumber) {
        if (randomNumber % numberDivisor === 0) {
          checkEven = 'no';
          break;
        }
        numberDivisor -= 1;
      }
    }

    if (playerAnswer === checkEven) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${checkEven}.
        Let's try again, ${namePlayer}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${namePlayer}!`);
    }
  }
}
