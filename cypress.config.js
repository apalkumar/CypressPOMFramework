const { defineConfig } = require("cypress");
experimentalRunAllSpecs: true

module.exports = defineConfig({
  // video :true,
  e2e: {
    experimentalRunAllSpecs: true,
    // experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      reportFilename: "[status]_[datetime]-[name]-report",
      timestamp: "longDate",
      embeddedScreenshots: true,
      inlineAssets: true,
      // videoOnFailOnly: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here  
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
