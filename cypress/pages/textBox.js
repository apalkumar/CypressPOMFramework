class textBoxcl{

    textBoxlocators ={
        fullName: ()=> cy.get('#userName', { timeout: 10000 }),
        EmailtxtBox: ()=> cy.get('#userEmail'),
        currentAddress: ()=> cy.get('textarea[placeholder="Current Address"]'),
        permanentAddress: ()=> cy.get('#permanentAddress'),
        submitButton: ()=> cy.get('#submit'),
        nameSaved: () => cy.get("p[id='name']"),
        EmailSaved: () => cy.get("p[id='email']"),
        currentAddressSaved: () => cy.get("p[id='currentAddress']"),
        permanentAddressSaved: () => cy.get("p[id='permanentAddress']"),
    }

    submitAddress(FullName, Email, Address){
        this.textBoxlocators.fullName().click();
        this.textBoxlocators.fullName().should("be.visible").type(`${FullName} {enter}`, { delay: 0 });
        this.textBoxlocators.EmailtxtBox().click();
        this.textBoxlocators.EmailtxtBox().type(`${Email} {enter}`, { delay: 0 });
        this.textBoxlocators.currentAddress().type(`${Address} {enter}`, { delay: 0 });
        this.textBoxlocators.permanentAddress().type(`${Address} {enter}`, { delay: 0 });
        this.textBoxlocators.submitButton().click();
    }

    verifyaddessSaved(){
        this.textBoxlocators.nameSaved().should("have.id","name");
        this.textBoxlocators.EmailSaved().should("have.id", "email");
        this.textBoxlocators.currentAddressSaved().should("have.id","currentAddress");
        this.textBoxlocators.permanentAddressSaved().should("have.id","permanentAddress");
    }
}
export default textBoxcl;