//broken-link.cy.js

import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"

const launchinpage5 = new launchinPage();
const aE5 = new allElements();

const brokenLinksdata = require('../../fixtures/example.json')
// const brokenLinksdata = require('../../fixtures/BrokenLinks.json')

/*describe('Broken Link', () => {
    it('Find all broken links', () => {
        // let textFromdiv = "Elements";

        // let selection = "Yes";
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
        let brokenLinks = 0
        let activeLinks = 0
        // launchinpage5.launchDemosite();
        // launchinpage5.openWebForms(textFromdiv);
        // aE5.OpenBrokenSection();
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {
                        cy.log('********* Link ${index +1 } is Broken Link ******* { href }')
                        brokenLinks++
                    }
                    else {
                        cy.log('********* Link ${index+1} is Active Link ******* { href }')
                        activeLinks++
                    }
                })
            }

        }).then(($links) => {
            const totalLinks = $links.length
            cy.log('******* total links ***** ${totalLinks}')
            cy.log('******* total Active links ***** ${activeLinks}')
            cy.log('******* total Broken links ***** ${brokenLinks}')
        })
    })
})*/

describe('Find broken links on the page', () => {
    it('verify navigation across the pages', () => {
        launchinpage5.launchDemosite();
        launchinpage5.openWebForms(brokenLinksdata.LHSElements);
        aE5.openSection(brokenLinksdata.SectionBroken);
        let brokenLinks = 0
        let activeLinks = 0
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href, failOnStatusCode: false }).then((response) => {
                    if (response.status >= 400) {
                        cy.log(`**** link  ${index + 1} is Broken Link *** ${href} `)
                        brokenLinks++
                    }
                    else {
                        cy.log(`**** link  ${index + 1} is Active Link *** ${href} `)
                        activeLinks++

                    }
                })
            }

        }).then(($links) => {
            const totalLinks = $links.length
            cy.log(`**** total links **** ${totalLinks}`)
            cy.log(`**** broken links **** ${brokenLinks}`)
            cy.log(`**** active links **** ${activeLinks}`)
        })
    })
});