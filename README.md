# Plop Pack Git Init

[![npm](https://img.shields.io/npm/v/plop-pack-git-init.svg)](https://www.npmjs.com/package/plop-pack-git-init)

Useful to have action for [PlopJS](https://github.com/plopjs/plop). This action runs the following commands on the respective path passed to it:

```
git init
git add -A
git commit -m "Initial commit"
```

## Installation

```
npm i plop-pack-git-init
```

## Example

```javascript
module.exports = function(plop) {
  // Loads the gitInit action type
  plop.load('plop-pack-git-init');

  plop.setGenerator('generate', {
    prompts: [
        // ...
    ],
    actions: function(data) {
      const actions = [];

      actions.push({
        type: 'gitInit',
        path: `${process.cwd()}/project-name/`,
        // By default is false, but if "true" will log the output of commands
        verbose: true
      })

      return actions;
    }
  })
}
```
