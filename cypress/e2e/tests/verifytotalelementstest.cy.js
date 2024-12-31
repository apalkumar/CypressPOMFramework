import allElements from "../../pages/pageForAllelements"
import launchinPage from "../../pages/launchingPage"
import textBoxcl from "../../pages/textBox"

const aE = new allElements();
const launchinpage1 = new launchinPage();
const tb = new textBoxcl();

const totalElementsValidation = require('../../fixtures/example.json')
const TextBoxValidation = require('../../fixtures/TextBox.json')

describe("Validate that all elements are loaded", function () {
    it("Validate all elements on a Page", function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        launchinpage1.launchDemosite();
        launchinpage1.openWebForms(totalElementsValidation.LHSElements);
        aE.verifyTotalLHSelement();
        aE.openSection(totalElementsValidation.SectionTextBox);
        tb.submitAddress(TextBoxValidation.FullName, TextBoxValidation.Email, TextBoxValidation.Address);
        tb.verifyaddessSaved();
    })
})