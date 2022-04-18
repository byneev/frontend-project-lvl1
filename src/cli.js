import readlineSync from 'readline-sync';

export const getUserName = () => readlineSync.question('May I have your name? ');

export const generateRandomNumber = () => Math.ceil(Math.random() * 100);

export const checkIsEven = (number) => !(number % 2);

export const getUserAnswer = (number) => readlineSync.question(`Question: ${number}\nYour answer: `);

export const checkUserAnswer = (number, answer) => (checkIsEven(number) ? answer === 'yes' : answer === 'no');
