class launchinPage {

    getCardLocator(index) {
        return cy.get(`div[class="category-cards"] div:nth-child(${index}) div:nth-child(1) div:nth-child(3) h5:nth-child(1)`);
    }

    webLocators = {
        cardElements: () => this.getCardLocator(1),
        cardForms: () => this.getCardLocator(2),
        cardAlertFormsandWindows: () => this.getCardLocator(3),
        cardWidget: () => this.getCardLocator(4),
        cardInterations: () => this.getCardLocator(5),
        cardBookstoreApp: () => this.getCardLocator(6),
    }

    launchDemosite() {
        cy.visit("https://demoqa.com/")
    }

    openWebForms(textFromdiv) {
        switch (textFromdiv) {
            case "Elements":
                this.webLocators.cardElements().should('be.visible').click();
                break;
            case "Forms":
                this.webLocators.cardForms().should('be.visible').click();
                break;
            case "Alerts, Frame & Windows":
                this.webLocators.cardAlertFormsandWindows().should('be.visible').click();
                break;
            case "Widgets":
                this.webLocators.cardWidget().should('be.visible').click();
                break;
            case "Interactions":
                this.webLocators.cardInterations().should('be.visible').click();
                break;
            case "Book Store Application":
                this.webLocators.cardBookstoreApp().should('be.visible').click();
                break;
            default:
                throw new Error(`Unknown section: ${textFromdiv}`);
        }
    }

    iterationinall(cardText) {
        cy.get(".category-cards div[class='card mt-4 top-card']").should("have.length", 6)
        cy.get(".category-cards div[class='card mt-4 top-card']").each((item, index, list) => {
            // console.log("thisis the list",list);
            // expect(list).to.have.length(6)
            // cy.wrap(item).should("contain.text", cardText[index])
            expect(Cypress.$(item).text()).to.eq(cardText[index])

        })
    }


}
export default launchinPage;