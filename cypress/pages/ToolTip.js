// import "cypress-real-events/e2e";


class toolTip{

    toolTipWebLocator = {
        toolTipButton: () => cy.get("#toolTipButton"),
        toolTipButtonText: () => cy.get("[aria-describeby='buttonToolTip']"),
        textBox: () => cy.get("#texFieldToolTopContainer"),
        textBoxToolTip: () => cy.get("[aria-describeby='ToolTipTextField']")
    }

    HoverandValidateButtonToolTip(){
        // this.toolTipWebLocator.toolTipButton().trigger('mouseover');
        // this.toolTipWebLocator.toolTipButton().invoke('show').click();
        this.toolTipWebLocator.toolTipButton().realHover('mouse');
        // this.toolTipWebLocator.toolTipButtonText().should("be.visible");
        // this.toolTipWebLocator.toolTipButtonText().should("exist");
    }

    HoverandValidateTextToolTip(){
        // this.toolTipWebLocator.textBox().trigger('mouseover');
        // this.toolTipWebLocator.textBox().invoke('show').click();
        this.toolTipWebLocator.textBox().realHover('mouse');
        // this.toolTipWebLocator.textBoxToolTip().should("be.visible");
        // this.toolTipWebLocator.textBoxToolTip().should("exist");
    }
}
export default toolTip;