class Slider {

    sliderWebLocators = {
        sliderBar: () => cy.get("input[value='25'].range-slider.range-slider--primary"),
        sliderTextbox: () => cy.get("#sliderValue")
    }


    selectValue() {
        // cy.get("range-slider.range-slider--primary").type("50",{force:true})

        // cy.get(".range-slider.range-slider--primary").then(function($input){
        // $input[0].setAttribute('value', '50')
        //   })
        //   .should('have.attr', 'value', '50')
        // cy.get("input[value]").should("have.attr", "50");
        // this.sliderWebLocators.sliderTextbox().type(50);
        // this.sliderWebLocators.sliderTextbox().should("have.text", "50")

        // cy.get(".range-slider.range-slider--primary").invoke("value", 50).trigger("change").click({ force: true })

        // const currentValue = 25;
        // const targetValue = 35;
        // const increment = 5;
        // const steps = (targetValue - currentValue) / increment;
        // const arrows = '{rightarrow}'.repeat(steps);

        // cy.get('.range-slider.range-slider--primary')
        //     .should('have.attr', 'value', 25)
        //     .type(arrows)

        // cy.get('.range-slider.range-slider--primary')
        //     .should('have.attr', 'value', 35)



        // cy.get(".range-slider.range-slider--primary").click({ multiple: true, force: true });
        // Press right arrow two times
        // cy.get(".range-slider.range-slider--primary").type("{rightarrow}{rightarrow}");

        // cy.get('.range-slider.range-slider--primary').should('have.attr', 'value', 25)
        // cy.window().then(win => {
        // win.app.sliderBar.selectValue(50);
        // })

        // cy.get('.range-slider.range-slider--primary')
        //     .trigger('touchstart', {
        //         touches: [{ pageY: 0, pageX: 0 }]
        //     })
        //     .trigger('touchmove', {
        //         touches: [{ pageY: 0, pageX: -30 }]
        //     })


        cy.get(".range-slider.range-slider--primary")
            .invoke("val", 90)
            .trigger("change")
            .click({ force: true })
            // cy.wait(1000)
            // cy.get("#sliderValue").should('have.value',  90)
            cy.get("#sliderValue").then(function($input){
                $input[0].setAttribute('value', '50')
                  })
                  .should('have.attr', 'value', '50')
    }
}
export default Slider;