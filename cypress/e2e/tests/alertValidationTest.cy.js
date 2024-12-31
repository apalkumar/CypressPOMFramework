import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import alerts from "../../pages/Alert"

const launchinpage8 = new launchinPage();
const aE8 = new allElements();
const al8 = new alerts();

const data = require("../../fixtures/example.json");
const Alertdata = require("../../fixtures/AlertData.json");

describe("Validation for differnt alerts", function () {
    it("test case for validation of different alerts", function () {
        launchinpage8.launchDemosite();
        launchinpage8.openWebForms(data.LHSAlert);
        aE8.openSection(data.SectionAlert)
        al8.alertValidationforClickMeButton(Alertdata.ClickMeFirstButtonText);
        al8.alertValidationforConfirmClickMeButton(Alertdata.ClickMeSecondButtonText, Alertdata.ClickMeSecondButtonTextOne);
        al8.alertValidationforPromptClickMeButton(Alertdata.ClickMeFourthButtonText, Alertdata.ClickMeFourthButtonTextOne);
    })
})