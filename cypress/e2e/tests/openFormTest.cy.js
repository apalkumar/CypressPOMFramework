import launchinPage from "../../pages/launchingPage"
import allElements from "../../pages/pageForAllelements"
import openform from "../../pages/openForm"

const launchinpage7 = new launchinPage();
const aE7 = new allElements();
const of1 = new openform();

const OpenFormValidation = require('../../fixtures/example.json')
const PracticeFormValidation = require('../../fixtures/PracticeForms.json')

describe("Open Form and Fill the Form", function () {
    it("Fill up the Form1", function () {
        launchinpage7.launchDemosite();
        launchinpage7.openWebForms(OpenFormValidation.LHSForms);
        aE7.openSection(OpenFormValidation.SectionPracticeForm);
        of1.enterFirstName(PracticeFormValidation.FirstName);
        of1.enterLastName(PracticeFormValidation.LastName);
        of1.enterEmailId(PracticeFormValidation.Email);
        of1.selectMaleRadioButton();
        of1.enterMobileNumber(PracticeFormValidation.MobileNumber);
        of1.selectHobby(PracticeFormValidation.HobbeySports)
        of1.enterCurrentAddess(PracticeFormValidation.Address);
        // of1.enterDOB(PracticeFormValidation.DOB);
        of1.enterSubject(PracticeFormValidation.Subject);
        // of1.selectState(PracticeFormValidation.State);
        of1.submitForm();
        of1.validateTable();
        of1.closeModal();
    })
})