import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import bookStoreLogin from "../../pages/bookStoreLogin"

const launchinpage8 = new launchinPage();
const aE8 = new allElements();
const bsl = new bookStoreLogin();

const bookStoreLoginValidation = require('../../fixtures/example.json')

describe("Book Store Login", function () {
    it("test case for Book Store Login", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // handle the error
            console.error(err)
        })
       
        launchinpage8.launchDemosite();
        launchinpage8.openWebForms(bookStoreLoginValidation.LHSBook);
        aE8.openSection(bookStoreLoginValidation.BookStoreLogin)
        bsl.enterUsername(bookStoreLoginValidation.userName);
        bsl.enterPassword(bookStoreLoginValidation.passWord);
        // bsl.clickonLoginbutton();
    })
})