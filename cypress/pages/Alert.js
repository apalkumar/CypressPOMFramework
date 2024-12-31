class alerts {

    alertWebLocators = {
        clickMebuttonforAlert: () => cy.get("#alertButton"),
        clickMebutton5Secalaert: () => cy.get("#timerAlertButton"),
        clickMeConfirmbutton: () => cy.get("#confirmButton"),
        clickMePromptbutton: () => cy.get("#promtButton"),
    }

    alertValidationforClickMeButton(ValidationMessage) {
        cy.log(ValidationMessage);
        console.log(ValidationMessage);
        this.alertWebLocators.clickMebuttonforAlert().click();
        // fire event with method on
        cy.on('window:alert', (t) => {
            //assertions
            // expect(t).to.contains('You clicked a button');
            expect(t).to.contains(ValidationMessage);
        })

    }

    alertValidationfor5SecClickMeButton() {
        this.alertWebLocators.clickMebutton5Secalaert().click();
        // fire event with method on
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('This alert appeared after 5 seconds');
        })
    }

    alertValidationforConfirmClickMeButton(ClickMeSecondButtonText, ClickMeSecondButtonTextOne) {
        this.alertWebLocators.clickMeConfirmbutton().click();
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            // expect(t).to.equal("Do you confirm action?");
            expect(t).to.equal(ClickMeSecondButtonText);
        });

        // cy.get('#confirmResult').should('have.text', 'You selected Ok')
        cy.get('#confirmResult').should('have.text', ClickMeSecondButtonTextOne)
    }

    alertValidationforPromptClickMeButton(ClickMeFourthButtonText, ClickMeFourthButtonTextOne) {
        console.log(ClickMeFourthButtonText);
        this.alertWebLocators.clickMePromptbutton().click();
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(ClickMeFourthButtonText);
        });

        cy.get('#promtButton').click();
        cy.get('#promptResult').should('have.text', ClickMeFourthButtonTextOne)
    }
}
export default alerts;