"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitDirectories = void 0;
var path_1 = require("path");
var directories = require('node-directories');
var isGitInit = require('is-git-init');
function gitDirectories(loc) {
    if (loc === void 0) { loc = '/'; }
    var dirs = directories(loc);
    var gitDirs = dirs.filter(function (dir) { return isGitInit(path_1.join(loc, dir)); });
    return gitDirs;
}
exports.gitDirectories = gitDirectories;
