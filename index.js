'use strict'

const betterGlobals = Object.assign({}, require('globals').node)

// These are deprecated and shouldn't be used. Delete them so they don't trip up
// the no-shadow rule.
delete betterGlobals.GLOBAL
delete betterGlobals.root

module.exports = {
  environments: {
    env: {
      globals: betterGlobals
    }
  }
}
