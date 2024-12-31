import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import Modal from "../../pages/modal"

const launchinpage11 = new launchinPage();
const aE11 = new allElements();
const mo = new Modal();

const ModalValidation = require('../../fixtures/example.json')
const ModalTextValidation = require('../../fixtures/Modal.json')

describe("Validation for differnt Modal", function () {
    it("test case for validation of different Modal", function () {
        launchinpage11.launchDemosite();
        launchinpage11.openWebForms(ModalValidation.LHSAlert);
        aE11.openSection(ModalValidation.SectionModal)
        mo.validatesmallModal(ModalTextValidation.smallModal);
        mo.validatelargeModal(ModalTextValidation.LargeModal);
    })
})