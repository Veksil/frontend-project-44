import readlineSync from 'readline-sync';

export function gameFirst(namePlayer) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.random() * 100;
    const roundedNumber = Math.round(randomNumber);

    console.log(`Question: ${roundedNumber}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    let checkEven = 'no';
    if (roundedNumber % 2 === 0) {
      checkEven = 'yes';
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

// export default gameFirst();
