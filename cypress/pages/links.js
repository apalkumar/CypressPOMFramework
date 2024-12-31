
class allLinks {

    linksWeblocators = {
        homeLink: () => cy.get("#simpleLink"),
        homeLink1: () => cy.get("#dynamicLink"),
        createdLink: () => cy.get("#created", { timeout: 10000 }),
        nocontentLink: () => cy.get("#no-content", { timeout: 10000 }),
        movedLink: () => cy.get("#moved", { timeout: 10000 }),
        badrequestLink: () => cy.get("#bad-request", { timeout: 10000 }),
        unauthorizedLink: () => cy.get("#unauthorized", { timeout: 10000 }),
        forbiddenLink: () => cy.get("#forbidden", { timeout: 10000 }),
        invalidurlLink: () => cy.get("#invalid-url", { timeout: 10000 }),
        linkResponse: () => cy.get("#linkResponse", { timeout: 10000 })
    }

    clickonHomelink() {
        this.linksWeblocators.homeLink().invoke('removeAttr', 'target').click({ timeout: 10000 });
        cy.url().should("include", "https://demoqa.com")
    }

    clickonHomelink1() {
        this.linksWeblocators.homeLink1().invoke('removeAttr', 'target').click()
        cy.url().should("include", "https://demoqa.com")
    }

    clickonCreatedLink(CreatedLinkText) {
        this.linksWeblocators.createdLink().click();
        this.linksWeblocators.linkResponse().should("have.text", CreatedLinkText)
    }

    clickonnoContentLink(NoConnectLinkText) {
        this.linksWeblocators.nocontentLink().click();
        this.linksWeblocators.linkResponse().should("have.text", NoConnectLinkText)
    }

    clickonMovedLink(MoveLinkText) {
        this.linksWeblocators.movedLink().click();
        this.linksWeblocators.linkResponse().should("have.text", MoveLinkText)
    }

    clickonBadrequestLink(BadRequestLinkText) {
        this.linksWeblocators.badrequestLink().click();
        this.linksWeblocators.linkResponse().should("have.text", BadRequestLinkText)
    }

    clickonUnauthorizedLink(UnAuthorizedLinkText) {
        this.linksWeblocators.unauthorizedLink().click();
        this.linksWeblocators.linkResponse().should("have.text", UnAuthorizedLinkText)
    }

    clickonForbiddenLink(ForbiddenLinkText) {
        this.linksWeblocators.forbiddenLink().click();
        this.linksWeblocators.linkResponse().should("have.text", ForbiddenLinkText)
    }

    clickonInvalidurlLink(InvalidLinkText) {
        this.linksWeblocators.invalidurlLink().click();
        this.linksWeblocators.linkResponse().should("have.text", InvalidLinkText)
    }

    totalLinnks() {
        cy.get("#linkWrapper p").should("have.length", 9)
    }
}
export default allLinks;