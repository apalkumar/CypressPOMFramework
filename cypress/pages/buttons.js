class buttons {
    ButtonwebLocators = {
        doubleClickMe: () => cy.get("button[id='doubleClickBtn']"),
        rightClickMe: () => cy.get("button[id='rightClickBtn']"),
        singleClickMe: () => cy.get(".btn.btn-primary"),
        doubleClickMessage: () => cy.get("#doubleClickMessage"),
        rightClickMessage: () => cy.get("#rightClickMessage"),
        singleClickMessage: () => cy.get("#dynamicClickMessage")
    }

    doubleClick(DoubleclickMessage) {
        this.ButtonwebLocators.doubleClickMe().dblclick();
        this.ButtonwebLocators.doubleClickMessage().should("have.text", DoubleclickMessage);
    }

    rightClick(RightclickMessage) {
        this.ButtonwebLocators.rightClickMe().rightclick()
        this.ButtonwebLocators.rightClickMessage().should("have.text", RightclickMessage);
        
    }

    singleClick(SingleclickMessage, SingleclickInnerText) {
        this.ButtonwebLocators.singleClickMe().should("have.text", SingleclickInnerText).click({ multiple: true });
        this.ButtonwebLocators.singleClickMessage().should("have.text", SingleclickMessage);
    }
}
export default buttons;