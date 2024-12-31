class upload{

    uploadWebLoctor = {
        uploadButton: ()=> cy.get('#uploadFile'),
        uploadedFilePath: ()=> cy.get('#uploadedFilePath'),
        downloadButton: () => cy.get('a#downloadButton.btn.btn-primary'),
        uploadedFilePath: () => cy.get('a#downloadButton.btn.btn-primary')
    }

    uploadfile(filePath){
        // this.uploadWebLoctor.uploadButton().selectFile("C:\\Users\\91953\\Downloads\\WhatsApp Image 2024-12-06 at 8.02.19 PM.jpeg")
        this.uploadWebLoctor.uploadButton().selectFile(filePath)
    }

    validatedUploadfile(){
        this.uploadWebLoctor.uploadedFilePath().should("exist")
    }

    validateddownloadedfile(){
        this.uploadWebLoctor.downloadButton().click();
        this.uploadWebLoctor.uploadedFilePath().should("exist")
    }
}export default upload;