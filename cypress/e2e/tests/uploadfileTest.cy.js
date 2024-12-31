import allElements from "../../pages/pageForAllelements"
import launchinPage from "../../pages/launchingPage"
import upload from "../../pages/upload"

const aE6 = new allElements();
const launchinpage6 = new launchinPage();
const uploadFile = new upload();

const uploadFileValidation = require('../../fixtures/example.json')

describe("Upload File Scenarios", function () {
    it("Upload File Test Case", function () {
        launchinpage6.launchDemosite();
        launchinpage6.openWebForms(uploadFileValidation.LHSElements);
        aE6.openSection(uploadFileValidation.SectionUploadDownload);
        uploadFile.uploadfile(uploadFileValidation.filePath)
        uploadFile.validatedUploadfile();
        uploadFile.validateddownloadedfile();
    })
})