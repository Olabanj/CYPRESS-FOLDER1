export const nameField = () =>  cy.xpath("(//input[@name='name'])[1]")

export const emailField = ()=>   cy.xpath("//input[@name='email']")

export const passwordField = ()=>  cy.xpath("(//input[@class='form-control'])[1]")

export const loginBtnField = () =>  cy.xpath("//input[@value='Submit']")

export const buttonField = () =>  cy.xpath("//input[@value='Submit']")

export const checkField = () => cy.xpath("(//input[@class='form-check-input'])[2]")

export const btnField = () =>cy.xpath("(//input[@id='login-button'])[1]") 

export const userField = () => cy.xpath("(//input[@id='user-name'])[1]")

export const passField = () => cy.xpath("(//input[@id='password'])[1]")







