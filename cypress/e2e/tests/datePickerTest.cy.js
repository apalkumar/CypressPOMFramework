import datePicker from "../../pages/datePicker"
import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"

const dp = new datePicker();
const launchinpage12 = new launchinPage();
const aE12 = new allElements();

const Widgetdata = require('../../fixtures/example.json')

describe("Validation for date picker", function () {
    it("test case for validation of date picket", function () {
        launchinpage12.launchDemosite();
        launchinpage12.openWebForms(Widgetdata.LHSWidget);
        aE12.openSection(Widgetdata.SectionDatePicker);
        dp.enterDate();
    })
})