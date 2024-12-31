class datePicker {

    datePickerWebLocator = {
        selectDateTextBox: () => cy.get("#datePickerMonthYearInput"),
        // datePickerControl: () => cy.get(".react-datepicker__month-container"),
        // datePickerMonthControl: () => cy.get(".react-datepicker__month-select"),
        // datePickerYearControl: () => cy.get(".react-datepicker__year-select"),
        // dateSelector: () => cy.get(".react-datepicker__day react-datepicker__day--025")
        dateAndtimepicker: () => cy.get("#dateAndTimePickerInput")
    }

    enterDate() {
        this.datePickerWebLocator.selectDateTextBox().clear().type("12/26/2025 {enter}",{delay: 0});
        this.datePickerWebLocator.dateAndtimepicker().clear().type("December 26, 2025 11:00 AM {enter}",{delay: 0});
        // this.datePickerWebLocator.datePickerControl().should("be.vsible");
        // this.datePickerWebLocator.datePickerMonthControl().select("April");
        // this.datePickerWebLocator.datePickerMonthControl().should("have.value", "3");
        // this.datePickerWebLocator.datePickerYearControl().select("2025");
        // this.datePickerWebLocator.datePickerYearControl().should("have.value", "2025");
        // this.datePickerWebLocator.dateSelector().click();

        // let DateNumber = "30th, ";
        // let day = "Friday, ";
        // let month = "December ";
        // let year = "2025";
        // let str12 = "Choose ";
        // let firstString = str12.concat(day);
        // let secondString = firstString.concat(month);
        // let thirdString = secondString.concat(DateNumber);
        // let finalString = thirdString.concat(year);

        // let firstString1 = str12.concat(day, month, DateNumber, year);

        // let date = "[aria-label='Choose Friday, December 26th, 2025']"
        // let date1 = "Choose" Friday, December ";
        // let FinalDate = date1.concat(DateNumber);
        // console.log("No",finalString);
        // console.log("No",firstString1);
        // cy.get(firstString1).click({ force: true });
    }
}
export default datePicker;