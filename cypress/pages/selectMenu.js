class SelectMenu{


    selectMenuWebLocators = {
        selectValueDropDown: () => cy.get("#withOptGroup"),
        selectOneDropDown: () => cy.get("#selectOne"),
        selectoldStyleDropDown: () => cy.get("#oldSelectMenu"),
        selectMultiSelectDropDown: () => cy.get(".css-1wa3eu0-placeholder").contains("Select..."),
        selectStandardMultiSelectDropDown: () => cy.get("#cars")
    }

    selectOptionfromValueDropdown(SelectValue1, SelectValue2, color, multiSelect){
        this.selectMenuWebLocators.selectValueDropDown().click();
        // this.selectMenuWebLocators.selectValueDropDown().type("Another root option {enter}", { delay: 0 });
        this.selectMenuWebLocators.selectValueDropDown().type(`${SelectValue1} {enter}`, { delay: 0 });
        this.selectMenuWebLocators.selectOneDropDown().click();
        // this.selectMenuWebLocators.selectOneDropDown().type("Dr. {enter}",{ delay: 0 });
        this.selectMenuWebLocators.selectOneDropDown().type(`${SelectValue2} {enter}`,{ delay: 0 });
        // this.selectMenuWebLocators.selectoldStyleDropDown().select("Green");
        this.selectMenuWebLocators.selectoldStyleDropDown().select(color);
        this.selectMenuWebLocators.selectMultiSelectDropDown().click();
        // this.selectMenuWebLocators.selectMultiSelectDropDown().type("Green {enter}",{ delay: 0 });
        // this.selectMenuWebLocators.selectMultiSelectDropDown().type("Blue {enter}",{ delay: 0 });
        this.selectMenuWebLocators.selectMultiSelectDropDown().type(`${color} {enter}`,{ delay: 0 });
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.realPress("Tab");
        cy.realPress("Tab");
        this.selectMenuWebLocators.selectStandardMultiSelectDropDown().should("be.visible").select(multiSelect);
    }
}
export default SelectMenu;