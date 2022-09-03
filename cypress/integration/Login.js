///<reference types = "cypress"/>
import * as EnterPage from '../Pages/login_page'
describe("sauce demo",function(){

before(function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})
    it("sucessful login",function(){
       //type,select,click method for end-to-end testing 
        EnterPage.nameField().type("secret sauce",{force:true})

        EnterPage.emailField().type("standard_user ").type("ola@gmail.com")

        EnterPage.passwordField().type("mailinator")
        
        cy.xpath("(//input[@class='form-check-input'])[2]").check()
        
        cy.xpath("//select[@class='form-control']").select("Female")
        
        cy.xpath("(//input[@id='inlineRadio1'])[1]").check()
         
        cy.xpath("//input[@name='bday']").type("2002-03-05")

        EnterPage.loginBtnField().click({force:true})

        EnterPage.loginBtnField().then($modalButton=>{

          const smallModalText = $modalButton.text()  

          cy.log(smallModalText)
         
          
          $modalButton.click()

          cy.xpath("//div[@class='alert alert-success alert-dismissible']").contains(" The Form has been submitted successfully!.")

          

         
        })


    })

       it("dbclick",function(){

        cy.xpath("(//input[@name='name'])[1]").type("secret sauce",{force:true})

        cy.xpath("//input[@name='email']").type("ola@gmail.com")

        cy.xpath("(//input[@class='form-control'])[1]").type("mailinator")
        
        cy.xpath("(//input[@class='form-check-input'])[2]").check()
        
        cy.xpath("//select[@class='form-control']").select("Female")
        
        cy.xpath("(//input[@id='inlineRadio1'])[1]").check()
         
         cy.xpath("//input[@name='bday']").type("2002-03-05")

        cy.xpath("//input[@value='Submit']").dblclick({force:true})
        
         })

     it("rightclick",function(){

        cy.xpath("(//input[@name='name'])[1]").type("secret sauce",{force:true})

        cy.xpath("//input[@name='email']").type("standard_user ").type("ola@gmail.com")

        cy.xpath("(//input[@class='form-control'])[1]").type("mailinator")
        
        cy.xpath("(//input[@class='form-check-input'])[2]").check()
        
        cy.xpath("//select[@class='form-control']").select("Female")
        
        cy.xpath("(//input[@id='inlineRadio1'])[1]").check()
         
        cy.xpath("//input[@name='bday']").type("2002-03-05")

        cy.xpath("//input[@value='Submit']").rightclick({force:true})
        
       
    })
  

})