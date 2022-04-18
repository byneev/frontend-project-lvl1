#!/usr/bin/env node
import { getProgressionCorrectAnswer, getProgressionQuestion, playGame } from '../src/index.js';

playGame('What number is missing in the progression?', getProgressionQuestion, getProgressionCorrectAnswer);
