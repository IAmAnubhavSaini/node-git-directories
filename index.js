const isGitInit = require('is-git-init')
const os = require('os')
const path = require('path')
const d = require('node-directories')

const gitDirectories = (loc='/') => {
  const dirs = d(loc)
  const gitDirs = dirs.filter(dir => isGitInit(path.join(loc, dir)))
  return gitDirs
}

module.exports = gitDirectories
