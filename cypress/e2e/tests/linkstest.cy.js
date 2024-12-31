import validateRadiobutton from "../../pages/radiobutton"
import allElements from "../../pages/pageForAllelements"
import launchinPage from "../../pages/launchingPage"
import allLinks from "../../pages/links"

const vr = new validateRadiobutton();
const aE4 = new allElements();
const launchinpage4 = new launchinPage();
const AL = new allLinks();

const linksData = require('../../fixtures/example.json')
const linksTextData = require('../../fixtures/linksData.json')

describe("Validation of links", function () {
    beforeEach(function () {
        // executes prior each test within it block
        // cy.log("BeforeEach hook")
        launchinpage4.launchDemosite();
        launchinpage4.openWebForms(linksData.LHSElements);
        aE4.verifyTotalLHSelement();
        aE4.openSection(linksData.SectionLink)
    })

    it("Home Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonHomelink();
    })

    it("Home Link1 Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonHomelink1();
    })

    it("Created Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonCreatedLink(linksTextData.CreatedLinkText);
    })

    it("No Content Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonnoContentLink(linksTextData.NoConnectLinkText);
    })

    it("Moved Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonMovedLink(linksTextData.MoveLinkText);
    })

    it("Bad Request Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonBadrequestLink(linksTextData.BadRequestLinkText);
    })

    it("Unauthorized Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonUnauthorizedLink(linksTextData.UnAuthorizedLinkText);
    })

    it("Forbidden Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonForbiddenLink(linksTextData.ForbiddenLinkText);
    })


    it("Not Found Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.clickonInvalidurlLink(linksTextData.InvalidLinkText);
    })

    it("Total Link Validation", { retries: { runMode: 2, openMode: 1, }, }, function () {
        AL.totalLinnks();
    })
})