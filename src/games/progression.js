import {
  randomNumberForProgressionGame, randomNumberInRange,
} from '../utils.js';

function getProgression() {
  console.log('What number is missing in the progression?');

  let lengthProgression = 0;
  const minLengthProgression = 5;
  while (lengthProgression < minLengthProgression) {
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

  return correctAnswer;
}

export default getProgression;
