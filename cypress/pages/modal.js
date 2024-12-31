class Modal{

    modalWebLocators = {
        smallModal:()=>cy.get("#showSmallModal"),
        smallModalBody:()=>cy.get(".modal-body"),
        smallModalcloseButton:()=>cy.get("#closeSmallModal"),
        largeModal:()=>cy.get("#showLargeModal"),
        largeModalBody:()=>cy.get(".modal-body"),
        largeModalcloseButton:()=>cy.get("#closeLargeModal")
    }

    validatesmallModal(smallModal){
        this.modalWebLocators.smallModal().click();
        this.modalWebLocators.smallModalBody().should("exist");
        this.modalWebLocators.smallModalBody().contains(smallModal)
        this.modalWebLocators.smallModalcloseButton().click()
    }

    validatelargeModal(LargeModal){
        this.modalWebLocators.largeModal().click();
        this.modalWebLocators.largeModalBody().should("exist");
        this.modalWebLocators.smallModalBody().contains(LargeModal)
        this.modalWebLocators.largeModalcloseButton().click()
    }
}
export default Modal;