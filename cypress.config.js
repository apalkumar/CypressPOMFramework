const { defineConfig } = require("cypress");
// const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path');
experimentalRunAllSpecs: true

module.exports = defineConfig({
  projectId: 'ys116s',
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
      on('task', {
        parseXlsx(filePath) {
          return new Promise((resolve, reject) => {
            try {
              const jsondata = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsondata);
            } catch (e) {
              reject(e)
            }
          })
        }
      })
    },
  },
});
