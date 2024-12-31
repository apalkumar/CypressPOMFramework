import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import autoComplete from "../../pages/autocomplete"

const aE8 = new allElements();
const launchinpage8 = new launchinPage();
const ac = new autoComplete();

const autoCompleteValidation = require('../../fixtures/example.json')

describe("Validation for AutoComplete", function(){
    it("test case for validation of AutoComplete", function(){
        // let textFromdiv = "Widgets";
        launchinpage8.launchDemosite();
        launchinpage8.openWebForms(autoCompleteValidation.LHSWidget);
        aE8.openSection(autoCompleteValidation.SectionAutoComplete);
        ac.enterMulticolor();
        ac.enterSinglecolor();
    } )
})