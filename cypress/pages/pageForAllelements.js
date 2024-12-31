class allElements {

    verifyTotalLHSelement() {
        cy.get(".accordion .element-group").should("have.length", 6)
    }

    openSection(sectionName) {
        cy.get(".accordion .element-group ul>li").should("have.length", 33).contains(sectionName).click();
    }

    // OpenTextBoxSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Text Box').click();
    // }

    // OpenCheckboxSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Check Box').click();
    // }

    // OpenRadioboxection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Radio Button').click();
    // }

    // OpenbuttonboxSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Buttons').click();
    // }

    // OpenLinksSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Links').click();
    // }

    // OpenBrokenSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Broken Links - Images').click();
    // }

    // OpenUploadFileSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Upload and Download').click();
    // }

    OpenDynamicPropertiesSection() {
        cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Dynamic Properties').click();
    }

    // OpenPracticeFormSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Practice Form').click();
    // }

    // OpenAlertSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Alerts').click();
    // }

    // OpenFrameSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Frames').click();
    // }

    // OpenNestedFrameSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Nested Frames').click();
    // }

    // OpenModalDialogSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Modal Dialogs').click();
    // }


    // OpenAutoCompleteSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Auto Complete').click();
    // }

    // OpenDatePickerSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Date Picker').click();
    // }

    // OpenSliderSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Slider').click();
    // }

    // OpenProgressBarSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Progress Bar').click();
    // }

    // OpenTabsSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Tabs').click();
    // }

    // OpenToolTipSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Tool Tips').click();
    // }

    // OpenMenuSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Menu').click();
    // }

    // OpenSelectMenuSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Select Menu').click();
    // }

    OpenSortableSection() {
        cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Sortable').click();
    }


    // OpenLoginSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Login').click();
    // }

    // OpenBookStoreSection() {
    //     cy.get(".accordion .element-group ul>li").should("have.length", 33).contains('Book Store').click();
    // }
}
export default allElements;