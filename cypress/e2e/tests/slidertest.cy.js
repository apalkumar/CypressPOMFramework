import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import Slider from "../../pages/slider"

const launchinpage13 = new launchinPage();
const aE13 = new allElements();
const sl = new Slider();

const SliderValidation = require('../../fixtures/example.json')

describe("Validation for Slider", function () {
    it("test case for validation of Slider", function () {
        launchinpage13.launchDemosite();
        launchinpage13.openWebForms(SliderValidation.LHSWidget);
        aE13.openSection(SliderValidation.SectionSlider);
        sl.selectValue();
    })
})