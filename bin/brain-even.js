#!/usr/bin/env node

import { getEvenCorrectAnswer, getEvenQuestion, playGame } from '../src/cli.js';

playGame('if even - yes', getEvenQuestion, getEvenCorrectAnswer);
