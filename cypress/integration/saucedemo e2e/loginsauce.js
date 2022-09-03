///<refernce types = "Cypress"/>

import * as LoginPage from '../Pages/login_page'
describe("login suite",function(){

it("verify the user login successfully",function(){

    cy.fixture("login").then(function(data){
        this.data = data
    
    cy.visit("https://www.saucedemo.com/")

    cy.url().should("contain","https://www.saucedemo.com/")
     
    cy.url().should("include","saucedemo")

    cy.xpath("(//input[@id='user-name'])[1]").type(this.username)

    cy.xpath("(//input[@id='user-name'])[1]").should("be.visible")

    cy.xpath("(//input[@id='password'])[1]").type(this.Password)

    cy.xpath("(//input[@id='password'])[1]").should("be.visible")

    cy.xpath("(//input[@id='password'])[1]").should("be.enabled")

    cy.xpath("(//input[@id='login-button'])[1]").click()

    
})
})



})