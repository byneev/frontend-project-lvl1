#!/usr/bin/env node

import { getPrimeCorrectAnswer, getPrimeQuestion, playGame } from '../src/index.js';

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', getPrimeQuestion, getPrimeCorrectAnswer);
