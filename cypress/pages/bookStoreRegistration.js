class bookStoreregistration {

    registrationWebLocators = {
        newUserbutton: () => cy.get("#newUser"),
        firstName: () => cy.get("#firstname"),
        lastName: () => cy.get("#lastname"),
        userName: () => cy.get("#userName"),
        passWord: () => cy.get("#password"),
        regisTer: () => cy.get("#register"),
        recaptchCheckBox: () => cy.get("#recaptcha-anchor")
    }

    clickonNewuserbutton() {
        this.registrationWebLocators.newUserbutton().click();
    }

    enterFirstName(FirstName) {
        // this.registrationWebLocators.firstName().click({force:true }).type("anil",{delay:0});
        // this.registrationWebLocators.firstName().click({force:true }).type(FirstName,{delay:0});
        cy.get("#firstname").click({ force: true }).type(FirstName, { delay: 0 });
        // this.registrationWebLocators.firstName().type("anil",{delay:0});
    }

    enterlastName(LastName) {
        // this.registrationWebLocators.lastName().click({force:true }).type("anil",{delay:0});
        // this.registrationWebLocators.lastName().click({force:true }).type(LastName,{delay:0});
        cy.get("#lastname").click({ force: true }).type(LastName, { delay: 0 });
        // this.registrationWebLocators.lastName().type("anil",{delay:0});
    }

    enterUserName(userName) {
        // this.registrationWebLocators.userName().click({force:true }).type("anil",{delay:0});
        // this.registrationWebLocators.userName().click({force:true }).type(userName,{delay:0});
        cy.get("#userName").click({ force: true }).type(userName, { delay: 0 });
        cy.realPress("Tab");
        // this.registrationWebLocators.userName().type("anil",{delay:0});
    }

    enterPassword(passWord) {
        // this.registrationWebLocators.passWord().click({force:true }).type("anil",{delay:0});
        // this.registrationWebLocators.passWord().click({force:true }).type(passWord,{delay:0});
        cy.get("#password").click({ force: true }).type(passWord, { delay: 0 });
        // this.registrationWebLocators.passWord().type("anil",{delay:0});
    }

    clickonRecaptchabutton() {
        this.registrationWebLocators.recaptchCheckBox().click();
    }

    clickonRegisterbutton() {
        this.registrationWebLocators.regisTer().click();
    }
}
export default bookStoreregistration;