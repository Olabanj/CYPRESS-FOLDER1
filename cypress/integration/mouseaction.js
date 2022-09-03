///<reference types = "cypress"/>
describe("mouseaction",function(){
    before(function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    })
    it("mousehover",function(){
        cy.xpath("//button[@id='mousehover']").trigger("mousedown")
      
    })

    it("mouseover",function(){
        cy.xpath("//button[@id='mousehover']").trigger("mouseover")
      
    
    
    
    })
     
    it("mousehover",function(){
        cy.xpath("//button[@id='mousehover']").trigger("mouseup")
      
    })

    it("mousehover",function(){
        cy.xpath("//button[@id='mousehover']").trigger("mousemove")
    })
    })