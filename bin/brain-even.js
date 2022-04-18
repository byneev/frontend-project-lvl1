#!/usr/bin/env node

import { getEvenCorrectAnswer, getEvenQuestion, playGame } from '../src/cli.js';

playGame('Answer "yes" if the number is even, otherwise answer "no".', getEvenQuestion, getEvenCorrectAnswer);
