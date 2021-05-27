# node-git-directories

Get only the directories that are git repositories - node module and executable

## Usage

### as a library

```javascript

const gitDirectories = require('node-git-directories')

gitDirectories('../')
// array of git repos

```

### as a terminal util

```shell

npm i -g node-git-directories

gitDirs | sed '1d' | awk -F'/' '{print $2}'
# list of git repos, one per line.

```

## License

MIT &copy; 2018 Git Faf
