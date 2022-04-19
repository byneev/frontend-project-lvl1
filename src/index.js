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

export const getGCDQuestion = () => `${Math.ceil(Math.random() * 100)} ${Math.ceil(Math.random() * 100)}`;

export const getProgressionQuestion = () => {
  let start = Math.ceil(Math.random() * 20);
  const delta = Math.ceil(Math.random() * 7);
  const empty = Math.ceil(Math.random() * 10);
  const array = [];
  for (let i = 1; i <= 10; i += 1) {
    if (i === empty) {
      array.push('..');
    } else {
      array.push(start);
    }
    start += delta;
  }
  return array.join(' ');
};

export const getPrimeQuestion = () => getEvenQuestion();

export const getEvenCorrectAnswer = (input) => (input % 2 ? 'no' : 'yes');

export const getCalcCorrectAnswer = (input) => {
  const [a, operator, b] = input.split(' ');
  switch (operator) {
    case '+':
      return String(+a + +b);
    case '-':
      return String(+a - +b);
    case '/':
      return String(Math.ceil(+a / +b));
    case '*':
      return String(+a * +b);
    default:
      return NaN;
  }
};

export const getGCDCorrectAnswer = (input) => {
  let [a, b] = input.split(' ');
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return String(+a + +b);
};

export const getProgressionCorrectAnswer = (input) => {
  const array = input.split(' ');
  const delta = Math.abs(+array[parseInt(array.length / 2, 10)]
    - +array[parseInt(array.length / 2 - 1, 10)]);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '..') {
      if (i === 0) {
        return String(+array[1] - delta);
      }
      if (i === array.length - 1) {
        return String(+array[i - 2] + delta);
      }
      return String((+array[i - 1] + +array[i + 1]) / 2);
    }
  }
  return 0;
};

export const getPrimeCorrectAnswer = (input) => {
  const getPrime = (inputIn, counter) => {
    if (counter === inputIn) {
      return 'yes';
    }
    if (inputIn % counter === 0) {
      return 'no';
    }

    return getPrime(input, counter + 1);
  };

  return getPrime(input, 2);
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
