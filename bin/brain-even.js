import {
  checkIsEven, checkUserAnswer, generateRandomNumber, getUserAnswer, getUserName,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count !== 3) {
  const num = generateRandomNumber();
  const answer = getUserAnswer(num);
  if (checkUserAnswer(num, answer)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkIsEven(num)}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${userName}!`);
}
