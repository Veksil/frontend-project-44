#!/usr/bin/env node
import { questionAboutName } from '../src/cli.js';
import { gameFirst } from '../games/game-first.js';

gameFirst(questionAboutName());
