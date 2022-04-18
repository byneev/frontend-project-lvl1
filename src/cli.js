import readlineSync from 'readline-sync';

export const getUserName = () => {
  return readlineSync.question('May I have your name? ');
}