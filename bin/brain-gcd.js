#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js';
import { getGreatestCommonDivisor } from '../src/games/gcd.js';

getGreatestCommonDivisor(getPlayerName());
