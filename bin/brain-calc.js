#!/usr/bin/env node
import { getCalcCorrectAnswer, getCalcQuestion, playGame } from '../src/index.js';

playGame('What is the result of the expression?', getCalcQuestion, getCalcCorrectAnswer);
