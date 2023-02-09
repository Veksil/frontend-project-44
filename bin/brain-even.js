#!/usr/bin/env node
import {questionAboutName} from '../src/cli.js';
import {gameFirst} from '../src/game-first.js';

gameFirst(questionAboutName())