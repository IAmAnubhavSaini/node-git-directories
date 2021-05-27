const isGitInit = require('is-git-init');
const {join} = require('path');
const d = require('node-directories');

const gitDirectories = (loc = '/') => {
    const dirs = d(loc);
    const gitDirs = dirs.filter(dir => isGitInit(join(loc, dir)));
    return gitDirs;
};

module.exports = gitDirectories;
