import {join} from 'path';

const directories = require('node-directories');
const isGitInit = require('is-git-init');

function gitDirectories(loc = '/') {
    const dirs = directories(loc);
    const gitDirs = dirs.filter((dir: string) => isGitInit(join(loc, dir)));
    return gitDirs;
}

export {gitDirectories};
