///<reference types = "Cypress"/>
describe("file upload test",function(){
    it ("file upload test",function(){
        cy.on('uncaught:exception', (err, runnable) => {
         return false;
          });
       cy.visit("https://demo.automationtesting.in/FileUpload.html")
        const imageFile = "Capture2report.PNG";
    cy.xpath('//input[@type="file"]').attachFile('Capture2report.PNG');
        

})

})

       
