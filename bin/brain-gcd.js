#!/usr/bin/env node
import { questionAboutName } from '../src/cli.js';
import { getGreatestCommonDivisor } from '../games/game-third.js';

getGreatestCommonDivisor(questionAboutName());
