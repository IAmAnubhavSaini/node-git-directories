#!/usr/bin/env node

const {join} = require('path');
const location = join(__dirname, process.argv[2] || '../');

console.log(`${location.endsWith('/') ? location : location + '/'}`);
const gitDirs = require('./');
console.log(gitDirs(location).map(l => `\t/${l}`).join('\n'));
