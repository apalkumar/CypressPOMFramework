import 'cypress-iframe'
import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import frameValidation from "../../pages/frame"

const launchinpage9 = new launchinPage();
const aE9 = new allElements();
const fr = new frameValidation();

const FrameValidation = require('../../fixtures/example.json')

describe("this is for the frame validation", function () {
    it("this test case is for frame validation", function () {
        launchinpage9.launchDemosite();
        launchinpage9.openWebForms(FrameValidation.LHSAlert);
        aE9.openSection(FrameValidation.SectionFrame)
        fr.frametoknow();
    })
})
