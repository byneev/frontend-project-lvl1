import readlineSync from 'readline-sync';

export const getUserName = () => readlineSync.question('May I have your name? ');

export const generateRandomNumber = () => Math.ceil(Math.random() * 100);

export const checkIsEven = (number) => !(number % 2);

export const checkUserAnswer = (number, answer) => (checkIsEven(number) ? answer === 'yes' : answer === 'no');

export const getRandomElement = (array) => {
  const index = Math.ceil(Math.random() * (array.length - 1));
  return array[index];
};

export const initGame = (rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  return userName;
};

export const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

export const getEvenQuestion = () => Math.ceil(Math.random() * 100);

export const getCalcQuestion = () => {
  const array = ['+', '-', '/', '*'];
  const operator = getRandomElement(array);
  return `${getEvenQuestion()} ${operator} ${getEvenQuestion()}`;
};

export const getEvenCorrectAnswer = (input) => (input % 2 ? 'yes' : 'no');

export const getCalcCorrectAnswer = (input) => {
  const [a, operator, b] = input.split(' ');
  switch (operator) {
    case '+':
      return +a + +b;
    case '-':
      return +a - +b;
    case '/':
      return +a / +b;
    case '*':
      return +a * +b;
    default:
      return NaN;
  }
};

export const gameAttempt = (value, getCorrectAnswer) => {
  const answer = getUserAnswer(value);
  const correctAnswer = getCorrectAnswer(value);
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const playGame = (rules, getQuestion, getCorrectAnswer) => {
  const userName = initGame(rules);
  let count = 0;
  while (count !== 3) {
    const attempt = gameAttempt(getQuestion(), getCorrectAnswer);
    if (!attempt) {
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
