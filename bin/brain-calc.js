#!/usr/bin/env node
import { getCalcCorrectAnswer, getCalcQuestion, playGame } from '../src/cli.js';

playGame('What is the result of the expression?', getCalcQuestion, getCalcCorrectAnswer);
