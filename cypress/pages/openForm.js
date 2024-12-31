

class openform {

    openFormWebLocators = {
        studentRegistrationfirstName: () => cy.get("#firstName"),
        studentRegistrationLastName: () => cy.get("#lastName"),
        studentRegistrationEmailid: () => cy.get("#userEmail"),
        studentRegistrationMaleRadioButton: () => cy.get("[for='gender-radio-1']"),
        studentRegistrationFemaleRadioButton: () => cy.get("[for='gender-radio-2']"),
        studentRegistrationNoneRadioButton: () => cy.get("[for='gender-radio-3']"),
        studentRegistrationMobilenumber: () => cy.get("#userNumber"),
        studentRegistrationDateofBirth: () => cy.get("#dateOfBirthInput"),
        studentRegistrationSubjects: () => cy.get("#subjectsContainer"),
        studentRegistrationHobbiesSports: () => cy.get("#hobbies-checkbox-1").should("have.value", "1"),
        studentRegistrationHobbiesReading: () => cy.get("#hobbies-checkbox-2").should("have.value", "2"),
        studentRegistrationHobbiesMusic: () => cy.get("#hobbies-checkbox-3").should("have.value", "3"),
        studentRegistrationUploadfile: () => cy.get("#uploadPicture"),
        studentRegistrationCurrentaddress: () => cy.get("textarea[placeholder='Current Address']"),
        studentRegistrationSelectState: () => cy.get("#state"),
        studentRegistrationSelectCity: () => cy.get("#city"),
        studentRegistrationSubmit: () => cy.get("#submit"),
        studentRegistrationState: () => cy.get(".css-1wa3eu0-placeholder").should("have.text", "Select StateSelect City"),
        closeButton: () => cy.get("#closeLargeModal"),
    }

    enterFirstName(FirstName) {
        this.openFormWebLocators.studentRegistrationfirstName().type(FirstName, { delay: 0 })
    }

    enterLastName(LastName) {
        this.openFormWebLocators.studentRegistrationLastName().type(LastName, { delay: 0 })
    }

    enterEmailId(Email) {
        this.openFormWebLocators.studentRegistrationEmailid().type(Email, { delay: 0 })
    }

    selectMaleRadioButton() {
        this.openFormWebLocators.studentRegistrationMaleRadioButton().click();
    }

    selectFemaleRadioButton() {
        this.openFormWebLocators.studentRegistrationFemaleRadioButton().check();
    }

    selectNoneRadioButton() {
        this.openFormWebLocators.studentRegistrationNoneRadioButton().check();
    }

    enterMobileNumber(MobileNumber) {
        this.openFormWebLocators.studentRegistrationMobilenumber().type(MobileNumber, { delay: 0 })
    }

    enterDOB(DOB) {
        this.openFormWebLocators.studentRegistrationDateofBirth().clear();
        this.openFormWebLocators.studentRegistrationDateofBirth().type(DOB, { delay: 0 })
    }

    enterSubject(Subject) {
        this.openFormWebLocators.studentRegistrationSubjects().type(Subject, { delay: 0 })
        cy.realPress("Tab");
    }

    selectHobby(hobby) {
            switch (hobby) {
                case "Sports":
                    this.openFormWebLocators.studentRegistrationHobbiesSports().check({ force: true });
                    break;
                case "Reading":
                    this.openFormWebLocators.studentRegistrationHobbiesReading().check({ force: true });
                    break;
                default:
                    throw new Error(`Unknown section: ${hobby}`);
            }
    }

    selectSportsMusic() {
        this.openFormWebLocators.studentRegistrationHobbiesMusic().check({ force: true });
        cy.wait(1000)
    }

    enterCurrentAddess(address) {
        this.openFormWebLocators.studentRegistrationCurrentaddress().click({ force: true })
        this.openFormWebLocators.studentRegistrationCurrentaddress().type(`${address} {enter}`, { delay: 0 });
    }

    selectState() {
        this.openFormWebLocators.studentRegistrationState().click();
    }

    submitForm() {
        this.openFormWebLocators.studentRegistrationSubmit().click();
    }

    closeModal(){
        this.openFormWebLocators.closeButton().click({force:true});
        console.log("Completed Tasks")
    }

    validateTable() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        cy.get("tr");
        cy.get("td");
        cy.get("td:nth-child(2)").each(($e1, index, $list) => {
            const text = $e1.text();
            console.log(text);
            if (text.includes("Abcd")) {
                cy.get("td:nth-child(2)").eq(index)
                    .then(function (Field) {
                        const Fieldtext = Field.text();
                        expect(Fieldtext).to.equal(text);
                    });
            }
        })
    };
} export default openform;