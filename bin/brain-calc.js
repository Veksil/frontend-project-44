#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js';
import { calculator } from '../src/games/calc.js';

calculator(getPlayerName());
