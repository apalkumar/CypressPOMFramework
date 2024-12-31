import launchinPage from "../../pages/launchingPage"
const launchinpage = new launchinPage();
const launchingData = require('../../fixtures/example.json')


describe("Validate that Page loaded", function () {
    it("Validate Landing Page", function () {
        const cardText = [
            "Elements",
            "Forms",
            "Alerts, Frame & Windows",
            "Widgets",
            "Interactions",
            "Book Store Application"
        ]

        launchinpage.launchDemosite();
        launchinpage.iterationinall(cardText)
        launchinpage.openWebForms(launchingData.LHSElements);
    })
})