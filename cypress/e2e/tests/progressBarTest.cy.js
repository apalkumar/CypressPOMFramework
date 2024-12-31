import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import progressBar from "../../pages/progressBar"

const launchinpage14 = new launchinPage();
const aE13 = new allElements();
const pb = new progressBar();

const ProgressBarValidation = require('../../fixtures/example.json')

describe("Validation for Progress Bar", function () {
    it("test case for validation of Progress Bar", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        launchinpage14.launchDemosite();
        launchinpage14.openWebForms(ProgressBarValidation.LHSWidget);
        aE13.openSection(ProgressBarValidation.SectionProgressBar);
        pb.measureProgressbar();
        pb.checkResetButton();
    })
})