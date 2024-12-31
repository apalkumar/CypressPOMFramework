import launchinPage from "../../pages/launchingPage"
import toolTip from "../../pages/ToolTip"
import allElements from "../../pages/pageForAllelements"

const launchinpage16 = new launchinPage();
const tt = new toolTip();
const aE16 = new allElements();

const toolTipValidation = require('../../fixtures/example.json')

describe("Validation for Tool Tips", function () {
    it("test case for validation of Tool Tips", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        let textFromdiv = "Widgets";
        launchinpage16.launchDemosite();
        launchinpage16.openWebForms(toolTipValidation.LHSWidget);
        aE16.openSection(toolTipValidation.SectionToolTip);
        tt.HoverandValidateButtonToolTip();
        tt.HoverandValidateTextToolTip();
    })
})