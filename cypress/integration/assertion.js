///<reference types="Cypress" />
describe("Assetion",function(){
    
    before(function(){
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('of undefined')
              done()
              return false
            });
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    })

   
    it("text assertion",function(){
        cy.xpath("(//input[@id='checkBoxOption1'])[1]").should('be.eq','Option1')



    })

    it("check assertion",function(){
        cy.xpath("(//input[@id='checkBoxOption1'])[1]").should('be.checked')


    })

    it("select assertion",function(){
        cy.xpath("//select[@id='dropdown-class-example']").select("Option2").should("be.selected")



    })
 
    it("visible assertion",function(){
        cy.xpath("//button[@id='mousehover']").should("be.visible")

   })

    
    it("enable assertion",function(){
        cy.xpath("(//input[@id='checkBoxOption1'])[1]").should("be.enabled")
})
})
