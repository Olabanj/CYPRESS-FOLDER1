describe("sauce demo",function(){
   
    it("sucessful login",function(){
        
        cy.visit("https://www.saucedemo.com/")
        cy.xpath("//input[@class='input_error form_input'][1]").type("secret sauce")
        cy.xpath("//input[@id='password']").type("standard_user ")
        cy.xpath("//input[@id='login-button']").click()
    
     })
    })