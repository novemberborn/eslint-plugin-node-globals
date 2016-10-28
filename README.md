# eslint-plugin-node-globals

Alternative ESLint environment for use with Node.js, without deprecated globals
such as `GLOBAL` and `root`. Useful when you've enabled the
[`no-shadow`](http://eslint.org/docs/rules/no-shadow) rule and you find that you
can no longer use `root` as a variable name.

## Installation

```console
$ npm install --save-dev eslint-plugin-node-globals
```

## Usage

In your ESLint config, load the plugin, disable the `node` environment, and
enable the `node-globals/env` environment:

```json
{
  "env": {
    "node": false,
    "node-globals/env": true
  },
  "plugins": ["node-globals"]
}
```

## Semantic versioning

Addition or removal of a global is considered a breaking change.
