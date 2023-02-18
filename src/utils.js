import readlineSync from "readline-sync";

export function randomNumber() {
  return Math.round(Math.random() * 100);
}

export function randomNumberInRange(minValue, maxValue) {
  return Math.round(minValue + Math.random() * (maxValue - minValue));
}

export function randomNumberForProgressionGame() {
  return Math.round(Math.random() * 10);
}

export function getPlayerAnswer() {
  return readlineSync.question("Your answer: ");
}
