///<reference types = "cypress"/>
import * as LoginPage from '../Pages/Fixture_pages'
import * as ButtonPage from '../Pages/btn_page'

describe("sauce demo",function(){

    before(function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })
        it("sucessful login",function(){
           //type,select,click method for end-to-end testing 
           cy.fixture("user").then(user=>{

           
           LoginPage.userField().type(user.name)
    
           LoginPage.emailField().type("standard_user ").type(user.email)
           LoginPage.passwordField().type(user.Password)
           ButtonPage.checkField().check()
            
            cy.xpath("//select[@class='form-control']").select("Female")
            
            cy.xpath("(//input[@id='inlineRadio1'])[1]").check()
             
            cy.xpath("//input[@name='bday']").type("2002-03-05")
            ButtonPage.buttonField().click({force:true})
        })
    })
})