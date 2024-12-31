import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import validateCheckBox from "../../pages/checkBox"

const launchinpage2 = new launchinPage();
const aE1 = new allElements();
const vc = new validateCheckBox();

const Buttondata = require('../../fixtures/example.json')

describe("this is for checkbox", function () {
    it("this is for checkbox validation", function () {
        const allText = [
            "You have selected :",
            "home",
            "desktop",
            "notes",
            "commands",
            "documents",
            "workspace",
            "react",
            "angular",
            "veu",
            "office",
            "public",
            "private",
            "classified",
            "general",
            "downloads",
            "wordFile",
            "excelFile"
        ]

        launchinpage2.launchDemosite();
        launchinpage2.openWebForms(Buttondata.LHSElements);
        aE1.verifyTotalLHSelement()
        aE1.openSection(Buttondata.LinkCheckBox)
        vc.checkboxClick()
        vc.validateallselectedText(allText)
    })
})