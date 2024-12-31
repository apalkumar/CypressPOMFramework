import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import bookStoreregistration from "../../pages/bookStoreRegistration"
import bookStoreLogin from "../../pages/bookStoreLogin"

const launchinpage8 = new launchinPage();
const aE8 = new allElements();
const bsr = new bookStoreregistration();
const bsl1 = new bookStoreLogin();

const bookStoreRegistrationValidation = require('../../fixtures/example.json')
const bookStoreRegistrationText = require('../../fixtures/PracticeForms.json')

describe("Book Store Registration", function () {
    it("test case for Book Store Registration", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // handle the error
            console.error(err)
        })

        launchinpage8.launchDemosite();
        launchinpage8.openWebForms(bookStoreRegistrationValidation.LHSBook);
        aE8.openSection(bookStoreRegistrationValidation.SectionBookStore)
        bsl1.clickonLoginbutton();
        bsr.clickonNewuserbutton();
        bsr.enterFirstName(bookStoreRegistrationText.FirstName);
        bsr.enterlastName(bookStoreRegistrationText.LastName);
        bsr.enterUserName(bookStoreRegistrationValidation.userName);
        bsr.enterPassword(bookStoreRegistrationValidation.passWord);
        // bsr.clickonRecaptchabutton();
        bsr.clickonRegisterbutton();
    })
})