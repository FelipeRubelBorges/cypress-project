const { defineConfig } = require('cypress')

module.exports = defineConfig({
  "expose": { "exampleHost": "example.local" },
  "e2e": {
    "specPattern": "cypress/integration/**/*.spec.js",
    "supportFile": "cypress/support/index.js"
  }
})
