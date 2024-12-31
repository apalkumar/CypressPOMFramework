import validateRadiobutton from "../../pages/radiobutton"
import allElements from "../../pages/pageForAllelements"
import launchinPage from "../../pages/launchingPage"

const vr = new validateRadiobutton();
const aE2 = new allElements();
const launchinpage2 = new launchinPage();

const RadioButtonValidation = require('../../fixtures/example.json')
const RadioButtonSelection = require('../../fixtures/radiobutton.json')

describe("Validate the Radio button selection", function () {
    it("Radio button validation selection", function () {
        launchinpage2.launchDemosite();
        launchinpage2.openWebForms(RadioButtonValidation.LHSElements);
        aE2.openSection(RadioButtonValidation.SectionRadioButton);
        vr.selectRadiobutton(RadioButtonSelection.selection);
    })
})