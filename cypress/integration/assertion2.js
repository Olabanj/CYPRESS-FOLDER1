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

   
    it("url assertion",function(){
        cy.url().should("contain","https://www.rahulshettyacademy.com/AutomationPractice/")



    })

    it("check titlte assertion",function(){
        cy.title().should('eql',"Practice Page")


    })

    it("go title",function(){
        cy.go("forward")




    })
 

    
    it("iterate each element assertion",function(){
        cy.xpath("//td[normalize-space()='Manager']").each($element=>{
            expect($element.text()).to.contains("Manager")
        })
})
})
