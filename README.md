# Plop Pack Git Init

[![npm](https://img.shields.io/npm/v/plop-pack-git-init.svg)](https://www.npmjs.com/package/plop-pack-git-init)

Useful to have action for [PlopJS](https://github.com/plopjs/plop). This action runs the following commands on the respective path passed to it:

```
git init
git add -A
git commit -m "Initial commit"
```

## Example

```javascript
const {gitInit} = require('plop-actions');

module.exports = function(plop) {
  plop.setActionType('gitInit', gitInit);

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
    }
  })
}
```
