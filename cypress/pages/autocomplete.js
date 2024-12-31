class autoComplete {

    autoCompleteWebLocators = {
        multipleColor: () => cy.get(".auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3"),
        singleColor: () => cy.get("#autoCompleteSingleContainer")
    }

    enterMulticolor() {
        this.autoCompleteWebLocators.multipleColor().type("Re", { delay: 0 });
        cy.realPress("Tab");
        this.autoCompleteWebLocators.multipleColor().click();
        this.autoCompleteWebLocators.multipleColor().type("gre", { delay: 0 });
        cy.realPress("Tab");
    }

    enterSinglecolor() {
        this.autoCompleteWebLocators.singleColor().click();
        this.autoCompleteWebLocators.singleColor().type("Red", { delay: 0 });
        cy.realPress("Tab");
    }
}
export default autoComplete;