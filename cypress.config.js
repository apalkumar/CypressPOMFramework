const { defineConfig } = require("cypress");
experimentalRunAllSpecs: true

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true
    },
   "reporter": "mochawesome",
    "reporterOptions": {
      "reportFilename": "[status]_[datetime]-[name]-report",
      "timestamp": "longDate"
    }
  },
});
