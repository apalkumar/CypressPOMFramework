class nestedFrames {

    nestedFrames() {
        cy.get("#frame1Wrapper>#frame1").should("exist")
        cy.get("#frame1Wrapper>#frame1").then(($ele, index) => {
            var ifele = $ele.contents().find("iframe[srcdoc='<p>Child Iframe</p>']")
            console.log("this is", ifele.text, index)
        })
    }
}
export default nestedFrames;