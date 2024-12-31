import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import Menu from "../../pages/menu"

const launchinpage17 = new launchinPage();
const aE17 = new allElements();
const mu = new Menu();

const MenuValidation = require('../../fixtures/example.json')

describe("Validation for Menu", function () {
    it("test case for validation of Menu", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        launchinpage17.launchDemosite();
        launchinpage17.openWebForms(MenuValidation.LHSWidget);
        aE17.openSection(MenuValidation.SectionMenu)
        mu.verifyMenuItems();
    })
})