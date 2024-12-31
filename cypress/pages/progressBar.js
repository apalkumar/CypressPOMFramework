class progressBar {


    progressbarWebLocator = {
        startStopButton: () => cy.get("#startStopButton"),
        progressbaar: () => cy.get("#progressBar"),
        resetButton: () => cy.get("#resetButton"),
    }

    measureProgressbar() {
        this.progressbarWebLocator.startStopButton().click();
        this.progressbarWebLocator.startStopButton().click({ delay: 500000 });
        cy.get('#progressBar')
            .invoke('text')
            .then(sometext => cy.log(sometext));
    }

    checkResetButton() {
        if (this.progressbarWebLocator.startStopButton().should('exist')) {
            this.progressbarWebLocator.startStopButton().click();

        }
        cy.wait(50000);
        this.progressbarWebLocator.resetButton().click({ timeout: 1000000 }, { delay: 50000000 });

    }
}
export default progressBar;