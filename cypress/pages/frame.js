class frameValidation {

    frameLocator = {
        frame1: () => cy.get("#frame1Wrapper>#frame1"),
    }

    frametoknow() {
        cy.get("#frame1Wrapper>#frame1").should("exist").should("be.visible").should("have.text", "")
        cy.get("#frame2Wrapper.mt-4").should("exist").should("be.visible").should("have.text", "")
        // cy.get("#frame1Wrapper>#frame1").find("#frame1Wrapper>#frame1").then(function(t){
        //     const frmtxt = t.text()
        //     expect(frmtxt).to.contains("This is a sample page");
        //     cy.log("this is ->",frmtxt);
        // })
    }

    nestedFrames() {
        cy.get("#frame1Wrapper>#frame1").should("exist")
        cy.get("#frame1Wrapper>#frame1").then(($ele, index) => {
            var ifele = $ele.contents().find("iframe[srcdoc='<p>Child Iframe</p>']")
            console.log("this is", ifele.text, index)
        })
    }
}
export default frameValidation;