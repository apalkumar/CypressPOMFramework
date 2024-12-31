class bookStoreLogin {

    bookStoreLoginWebLocators = {
        userName: () => cy.get("#userName"),
        passWord: () => cy.get("#password"),
        loGin: () => cy.get(".text-right.col-md-4.col-sm-12>#login"),
        SearchBox: () => cy.get("#searchBox"),
    }

    enterUsername(userName) {
        this.bookStoreLoginWebLocators.userName().type(userName, { delay: 0 });
        cy.realPress('Tab');
    }

    enterPassword(password) {
        // this.bookStoreLoginWebLocators.passWord().type(password, { delay: 0 }).type('{enter}');
        cy.get("#password-wrapper>.col-md-9.col-sm-12>#password").type(password, { delay: 0 });
        cy.realPress('Tab');
        cy.realPress('Tab');
        cy.get("#userForm>.mt-2.buttonWrap>.text-right.button>#login").scrollIntoView();
        cy.get("#login").click();
        // this.clickonLoginbutton();
    }

    validateresponse1() {
        // Wait for the search box to exist
        this.bookStoreLoginWebLocators.SearchBox().should('be.visible');
    }

    validateresponse() {
        cy.intercept({
            pathname: '/Account/v1/GenerateToken',
        }).as('GenerateToken');
        cy.wait('@GenerateToken').then(interception => {
            // expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.status).equals("Success");
            // expect(interception.response.body).to.have.property('token');
            // except(interception.response.body.result).to.eq('User authorized successfully.');
        })
        // cy.intercept('POST', 'https://demoqa.com/Account/v1/GenerateToken', (req) => {
        //     console.log("body",req.body);
        //     cy.log("body",req.body);
        //     req.reply({
        //         statusCode: 200,
        //         body: {
        //             "userName": "apal@user.com",
        //             "password": "Toolsqa@123"
        //         },
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     })
        // })

        // this.bookStoreLoginWebLocators.passWord().type("Toolsqa@123 {enter}");
        // this.bookStoreLoginWebLocators.passWord().type(`${password} {enter}`);
        // cy.wait(10000);
        // cy.get("#searchBox", { timeout: 100000}).should('exist');
        // this.bookStoreLoginWebLocators.SearchBox().should('exist');
    }

    clickonLoginbutton() {
        // cy.get("#userForm>.mt-2.buttonWrap>.text-right.button>#login").scrollIntoView();
        // cy.get("#userForm>.mt-2.buttonWrap>.text-right.button>#login").click();

        cy.get("#login").scrollIntoView();
        cy.get("#login").click();
    }
}
export default bookStoreLogin;