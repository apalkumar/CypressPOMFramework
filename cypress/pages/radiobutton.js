class validateRadiobutton{

    radiobuttonWeblocators = {
        yesRadiobutton: () => cy.get("label[for='yesRadio']"),
        impresiveRadiobutton: () => cy.get("label[for='impressiveRadio']"),
        textGenerated: () => cy.get(".text-success")
    }

    selectRadiobutton(selection){
        if(selection == "yes"){
            this.radiobuttonWeblocators.yesRadiobutton().click();
            this.radiobuttonWeblocators.textGenerated().should("have.text", "Yes");
        }else if(selection == "Impressive"){
            this.radiobuttonWeblocators.impresiveRadiobutton().click();
            this.radiobuttonWeblocators.textGenerated().should("have.text", "Impressive");
        }    
    }
}
export default validateRadiobutton;