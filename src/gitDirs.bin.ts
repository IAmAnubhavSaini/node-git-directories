#!/usr/bin/env node

import {join} from 'path';

import {gitDirectories} from './index';

const location = join(__dirname, process.argv[2] || '../') as string;

console.log(`${location.endsWith('/') ? location : location + '/'}`);

console.log(gitDirectories(location).map((l: string) => `\t/${l}`).join('\n'));
