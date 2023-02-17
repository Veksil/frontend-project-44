/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function getProgression(namePlayer) {
  console.log('What number is missing in the progression?');

  function randomNumber(minValue, maxValue) {
    return Math.round(minValue + Math.random() * (maxValue - minValue));
  }

  for (let i = 0; i < 3; i += 1) {
    let lengthProgression = Math.round(Math.random() * 10);
    while (lengthProgression < 5) {
      lengthProgression = Math.round(Math.random() * 10);
    }

    const stepProgression = Math.round(Math.random() * 10);
    const progression = [];
    let numberInArrayProgression = stepProgression;

    for (let j = 0; j < lengthProgression; j += 1) {
      progression.push(numberInArrayProgression);
      numberInArrayProgression += stepProgression;
    }

    const hiddenIndex = randomNumber(0, lengthProgression - 1);

    const hiddenNumber = progression[hiddenIndex];

    const correctAnswer = hiddenNumber;
    progression[hiddenIndex] = '..';

    const progressionInString = progression.join(' ');

    console.log(`Question: ${progressionInString}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (Number(playerAnswer) === correctAnswer) {
      console.log('Correct');
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