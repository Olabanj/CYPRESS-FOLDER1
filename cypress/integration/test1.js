//<reference types = "cypress"/>
describe("sauce demo",function(){
it("sucessful login",function(){
    cy.visit("https://www.saucedemo.com/")
    cy.xpath("(//input[@id='user-name'])[1]").type("secret sauce")
    cy.xpath("//input[@id='password'])[1]").type("standard_user ")
    cy.xpath("//input[@id='login-button']").click()



})
})