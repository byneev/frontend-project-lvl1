#!/usr/bin/env node
import { getGCDCorrectAnswer, getGCDQuestion, playGame } from '../src/index.js';

playGame('Find the greatest common divisor of given numbers.', getGCDQuestion, getGCDCorrectAnswer);
