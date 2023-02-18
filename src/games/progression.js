/* eslint-disable import/prefer-default-export */
import { randomNumberForProgressionGame, randomNumberInRange, getPlayerAnswer } from '../utils.js';

export function getProgression(namePlayer) {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    let lengthProgression = 0;
    while (lengthProgression < 5) {
      lengthProgression = randomNumberForProgressionGame();
    }

    const stepProgression = randomNumberForProgressionGame();
    const progression = [];
    let numberInArrayProgression = stepProgression;

    for (let j = 0; j < lengthProgression; j += 1) {
      progression.push(numberInArrayProgression);
      numberInArrayProgression += stepProgression;
    }

    const hiddenIndex = randomNumberInRange(0, lengthProgression - 1);

    const hiddenNumber = progression[hiddenIndex];

    const correctAnswer = hiddenNumber;
    progression[hiddenIndex] = '..';

    const progressionInString = progression.join(' ');

    console.log(`Question: ${progressionInString}`);

    const playerAnswer = Number(getPlayerAnswer());

    if (playerAnswer === correctAnswer) {
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
