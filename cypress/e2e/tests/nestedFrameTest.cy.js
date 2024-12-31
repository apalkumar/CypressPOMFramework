import 'cypress-iframe'
import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import nestedFrames from "../../pages/nestedFrames"

const aE10 = new allElements();
const launchinpage10 = new launchinPage();
const nfr = new nestedFrames();

const FrameValidation1 = require('../../fixtures/example.json')

describe("this is for the Nested Frame", function () {
    it("this test case is for Nested frame validation", function () {
        launchinpage10.launchDemosite();
        launchinpage10.openWebForms(FrameValidation1.LHSAlert);
        aE10.openSection(FrameValidation1.SectionNestedFrame)
        nfr.nestedFrames();
    })
})