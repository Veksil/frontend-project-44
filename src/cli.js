import readlineSync from 'readline-sync';

function questionAboutPlayerName() {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const namePlayer = readlineSync.question('Your answer: ');

  console.log(`Hello, ${namePlayer}`);

  return namePlayer;
}

export default questionAboutPlayerName;
