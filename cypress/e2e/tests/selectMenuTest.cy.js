import launchinPage from "../../pages/launchingPage"
import SelectMenu from "../../pages/selectMenu"
import allElements from "../../pages/pageForAllelements"

const launchinpage19 = new launchinPage();
const sm = new SelectMenu();
const aE19 = new allElements();

const SelectMenuValidation = require('../../fixtures/example.json')
const DropdownValidation = require('../../fixtures/Dropdown.json')

describe("Validation for Select Menu", function () {
    it("test case for validation of Select Menu", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // let textFromdiv = "Widgets";
        launchinpage19.launchDemosite();
        // launchinpage19.openWebForms(textFromdiv);
        launchinpage19.openWebForms(SelectMenuValidation.LHSWidget);
        // aE19.OpenSelectMenuSection();
        aE19.openSection(SelectMenuValidation.SectionSelectMenu)
        sm.selectOptionfromValueDropdown(DropdownValidation.SelectValue1, DropdownValidation.SelectValue2, DropdownValidation.color, DropdownValidation.multiSelect);
    })
})