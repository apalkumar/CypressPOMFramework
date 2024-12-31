class validateCheckBox {

    checkBoxpagelocators = {
        rootExpandbutton: () => cy.get("span button"),
        firctCheckBox: () => cy.get('label[for="tree-node-home"]'),
        allcheckboxSelected: () => cy.get("div[id='result'] span")
    }

    checkboxClick() {
        this.checkBoxpagelocators.rootExpandbutton().click();
        this.checkBoxpagelocators.firctCheckBox().click();
    }

    validateallselectedText(allText) {
        this.checkBoxpagelocators.allcheckboxSelected().should("have.length", 18)
        cy.get("div[id='result'] span").each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(allText[index])
        })

        // cy.get(".category-cards div[class='card mt-4 top-card']").each((item, index, list) => {
        // console.log("thisis the list",list);
        // expect(list).to.have.length(6)
        // cy.wrap(item).should("contain.text", cardText[index])
        // expect(Cypress.$(item).text()).to.eq(cardText[index])
    }
}
export default validateCheckBox;