import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import buttons from "../../pages/buttons"

const launchinpage3 = new launchinPage();
const aE3 = new allElements();
const be1 = new buttons();

const Buttondata = require('../../fixtures/example.json')
const ButtonTextdata = require('../../fixtures/Button.json')

describe("Rabio Button", function () {
    it("Validation of Radio button", function () {
        launchinpage3.launchDemosite();
        launchinpage3.openWebForms(Buttondata.LHSElements);
        aE3.openSection(Buttondata.LinkButton)
        be1.singleClick(ButtonTextdata.SingleclickMessage, ButtonTextdata.SingleclickInnerText);
        be1.doubleClick(ButtonTextdata.DoubleclickMessage);
        be1.rightClick(ButtonTextdata.RightclickMessage);
    })
})