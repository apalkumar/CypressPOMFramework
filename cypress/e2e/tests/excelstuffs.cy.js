const { readSheetNames, parseExcelDate } = require("read-excel-file")

const dataRowZero = [   // this is the first row of the excel file
    "start Date",
    "Number of students",
    "Is Free",
    "Course Title"
];

const dataRowOne = [   // this is the first row of the excel file
    "january",
    "Ten",
    "Yes",
    "Mac"
];

const dataRowTwo = [   // this is the second row of the excel file
    "10",
    "10-2-2025",
    "true",
    "false"
];


describe('Excel Stuffs', () => {
    it('Read Excel File', () => {
        cy.readFile('cypress/downloads/TestSample.xlsx').should('exist')
    })

    it('Read first row Excel File', () => {
        cy.task('parseXlsx', 'cypress/downloads/TestSample.xlsx').then(jsondata => {
            expect(jsondata[0].data[0]).to.eqls(dataRowZero);
            cy.log(dataRowZero[0]);
            cy.log(dataRowZero[1]);
            cy.log(dataRowZero[2]);
            cy.log(dataRowZero[3]);
        })
    })

    it('Read Second Row of Excel File', () => {
        cy.task('parseXlsx', 'cypress/downloads/TestSample.xlsx').then(
            jsonData => {
                expect(jsondata[0].data[1]).to.eqls(dataRowOne);
            })
    })

    it('Read third row Excel File', () => {
        cy.task('parseXlsx', 'cypress/downloads/TestSample.xlsx').then(jsondata => {
            const value1 = Boolean(jsondata[0].data[2][2]).toString();
            const value2 = Boolean(jsondata[0].data[2][3]).toString();
            const numberdata = parseInt(jsondata[0].data[2][0]).toString();
            const datevalue = (jsondata[0].data[2][1]).toString();
            expect(numberdata).to.eqls(dataRowTwo[0]);
            expect(datevalue).to.eqls(dataRowTwo[1]);
            expect(value1).to.eqls(dataRowTwo[2]);
            expect(value2).to.eqls(dataRowTwo[3]);
        })
    })


})