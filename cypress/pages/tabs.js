class tabs{

    tabsWebLocator = {
        WhatTab: () => cy.get("#demo-tab-what"),
        textLocation: () => cy.get(".mt-3"),
        OriginTab: () => cy.get("#demo-tab-origin"),
        UseTab: () => cy.get("#demo-tab-use"),
        MoreTab: () => cy.get("#demo-tab-more")
    }

    openWhattab(WhatTab){
        this.tabsWebLocator.WhatTab().click();
        this.tabsWebLocator.textLocation().contains(WhatTab)
    }

    openOrigintab(OriginTab){
        this.tabsWebLocator.OriginTab().click();
        this.tabsWebLocator.textLocation().contains(OriginTab)
    }

    openUsetab(UseTab){
        this.tabsWebLocator.UseTab().click();
        this.tabsWebLocator.textLocation().contains(UseTab)
    }

 }
 export default tabs;