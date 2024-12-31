import launchinPage from "../../pages/launchingPage"
import tabs from "../../pages/tabs"
import allElements from "../../pages/pageForAllelements"

const launchinpage15 = new launchinPage();
const tb = new tabs();
const aE15 = new allElements();

const tabTestValidation = require('../../fixtures/example.json')
const tabTestTextValidation = require('../../fixtures/tabTest.json')

describe("Validation for Tabs", function () {
    it("test case for validation of Tabs", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        launchinpage15.launchDemosite();
        launchinpage15.openWebForms(tabTestValidation.LHSWidget);
        aE15.openSection(tabTestValidation.SectionTabs);
        tb.openWhattab(tabTestTextValidation.WhatTab);
        tb.openOrigintab(tabTestTextValidation.OriginTab);
        tb.openUsetab(tabTestTextValidation.UseTab);
    })
})