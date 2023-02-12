#!/usr/bin/env node
import { questionAboutName } from '../src/cli.js';
import { calculator } from '../games/game-second.js';

calculator(questionAboutName());
