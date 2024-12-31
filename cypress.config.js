const { defineConfig } = require("cypress");
experimentalRunAllSpecs: true

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
