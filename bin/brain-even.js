#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js';
import { isEven } from '../src/games/even.js';

isEven(getPlayerName());
