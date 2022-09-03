describe("sauce demo",function(){
    
    before(function(){
        
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    })

   
    it("select an elemenet",function(){
        cy.xpath("//select[@id='dropdown-class-example']").select('Option2')



    })

    it("checkbox",function(){
      cy.xpath("//input[@value='option1']").check()


    })

    it("uncheckbox",function(){
        cy.xpath("//input[@value='option1']").uncheck()



    })

    it("select multiple checkbox",function(){
        cy.xpath("//input[@type='checkbox']").check(['option1','option3'])



    })
})
            