import readlineSync from 'readline-sync';

export default function questionAboutName() {
console.log("May I have your name?")
const name = readlineSync.question('Your answer: ');
console.log(`Hello, ${name}`)
}

