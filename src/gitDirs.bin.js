#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var index_1 = require("./index");
var location = path_1.join(__dirname, process.argv[2] || '../');
console.log("" + (location.endsWith('/') ? location : location + '/'));
console.log(index_1.gitDirectories(location).map(function (l) { return "\t/" + l; }).join('\n'));
