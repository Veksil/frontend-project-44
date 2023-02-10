/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export function questionAboutName() {
  console.log('Welcome to the Brain Games!'); // print greating
  console.log('May I have your name?');

  const namePlayer = readlineSync.question('Your answer: ');

  console.log(`Hello, ${namePlayer}`);

  return namePlayer;
}

// export default questionAboutName();
