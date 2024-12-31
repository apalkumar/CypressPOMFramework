class Menu {

    menuWebLocators = {
        MainItem1: () => cy.get('a[href="#"]').contains("Main Item 1"),
        MainItem2: () => cy.get('a[href="#"]').contains("Main Item 2"),
        MainItem3: () => cy.get('a[href="#"]').contains("Main Item 3"),
        SubItem1: () => cy.get('a[href="#"]').contains("Sub Item"),
        // SubItem1: () => cy.get('a[href="#"]').contains("Sub Item").first(),
        SubSubList: () => cy.get('a[href="#"]').contains("SUB SUB LIST »"),
        SubSubItem1: () => cy.get('a[href="#"]').contains("Sub Sub Item 1"),
        SubSubItem2: () => cy.get('a[href="#"]').contains("Sub Sub Item 2"),
    }

    verifyMenuItems() {
        this.menuWebLocators.MainItem1().should("be.visible");
        this.menuWebLocators.MainItem3().should("be.visible");
        this.menuWebLocators.MainItem2().should("be.visible").realHover('mouse');
        this.menuWebLocators.SubItem1().should("be.visible");
        this.menuWebLocators.SubSubList().should("be.visible").realHover('mouse');
        this.menuWebLocators.SubSubItem1().should("be.visible");
        this.menuWebLocators.SubSubItem2().should("be.visible");
    }
}
export default Menu;